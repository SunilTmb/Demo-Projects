


function ContactList(props) {


  const renderContactList = props.contacts.map((contact) => {
    return(
      <div className="item">
          <div className="content">
            <div className="header"> {contact.name}</div>
            <div> {contact.email}</div>
          </div>
          <i className="trash alternate outline icon"></i>
      </div>
    );
  });

  return (
    <section className="ui celled list contact_list">
      {renderContactList}
    
    </section>
  )
}

export default ContactList
