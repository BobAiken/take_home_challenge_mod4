

export default function Header({section, setSection}) {

  return(
    <header>
      <h1>NY Times Top Articles</h1>
      <label htmlFor="section">Choose a category</label>
      <form >
        <select name="section" id="section" value={section} onChange={event=>setSection(event.target.value)}>
          <option value="arts">Arts</option>
          <option value="automobiles">Automobiles</option>
        </select>
      </form>
    </header>
  )
}