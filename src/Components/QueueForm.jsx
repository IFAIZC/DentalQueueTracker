import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selection, setSelection] = useState("");

  // newly added
  const [queueList, setQueueList] = useState([]); // Stores submitted entries

  function submitForm(e) {
    e.preventDefault();

    // newly added
    const newEntry = { id: Date.now(), name, phone, selection };
    setQueueList([...queueList, newEntry]); // Add new entry to list

    setName("");
    setPhone("");
    setSelection("");
  }

  return (
    <div>
      <h1>Queue Management</h1>

      {/* Form */}
      <form onSubmit={submitForm}>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />

        <label>Phone Number</label>
        <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} required />

        <label>Selection:</label>
        <select onChange={(e) => setSelection(e.target.value)} value={selection} required>
          <option value="" disabled>Select an option</option>
          <option value="Emergency">Emergency</option>
          <option value="Appointment">Appointment</option>
          <option value="Checkup">Checkup</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {/* newly added */}
      {/* Table */}
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Selection</th>
          </tr>
        </thead>
        <tbody>
          {queueList.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>No data available</td>
            </tr>
          ) : (
            queueList.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.name}</td>
                <td>{entry.phone}</td>
                <td>{entry.selection}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
