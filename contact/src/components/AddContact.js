
function AddContact() {
  return (
    <section className="ui main add_contact_sec">
      <h2> Add Contact </h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name"></input>
        </div>
        <div className="field">
          <label>E-mail</label>
          <input type="text" name="email" placeholder="E-mail"></input>
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </section>
  )
}

export default AddContact