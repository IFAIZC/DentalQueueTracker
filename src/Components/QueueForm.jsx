import { useState } from "react"


export default function QueueForm() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [selection, setSelection] = useState("")

  function submitName(e){
    setName(e.target.value)
  }
  function submitPhone(e){
    setPhone(e.target.value)
  }
  function submitSelection(e){
    setSelection(e.target.value)
  }

  function submitForm(e) {
    e.preventDefault(); // Prevents page reload
    console.log(name,phone,selection)
  }

  return (
    <div>
      <form action="" onClick={submitForm}>
        <label htmlFor="">Name</label>
        <input type="text" onChange={submitName}/>
        
        <label htmlFor="">Phone Number</label>
        <input type="text" onChange={submitPhone}/>

        <label for="appointment">Selection:</label>
          <select name="appointment" id="appointment" onChange={submitSelection}>
            <option value="" disabled selected>Select an option</option>
            <option value="Emergency">Emergency</option>
            <option value="Appointment">Appointment</option>
            <option value="Checkup">Checkup</option>
          </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}