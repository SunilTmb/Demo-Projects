import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact.js';
import ContactList from './ContactList.js';

function App() {
  return (
   <div>
    <Header/>
    <ContactList/>
    <AddContact/>
   </div>
  );
}

export default App;
