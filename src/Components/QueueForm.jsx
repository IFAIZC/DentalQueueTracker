export default function QueueForm() {
  return (
    <div>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" />
        
        <label htmlFor="">Phone Number</label>
        <input type="text" />

        <label htmlFor="">Selection</label>
        <select name="" id="">
          <option value="">Sakit gigi</option>
          <option value="">doctor apoiment</option>
          <option value="">checkup</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}