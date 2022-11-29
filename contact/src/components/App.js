import './App.css';
import Header from './Header';
import AddContact from './AddContact.js';
import ContactList from './ContactList.js';

function App() {
  const contacts  =[
    {
    id:"1",
    name:"abc",
    email:"abc@gmail.com"
  },
  {
    id:"2",
    name:"def",
    email:"def@gmail.com"
  },
];

  return (
   <section className='ui container'>
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/>
   </section>
  );
}

export default App;
