import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import './styles.css';

function Contacts() {
    const [contacts, setContacts] = useState([
      {fullname:"Harry Potter",phone_number:123123},
      {fullname:"Hermione Granger", phone_number:456456},
      {fullname:"Ron Weasley",phone_number:789789}]);

    useEffect( ()=>{
        console.log(contacts);
    },[contacts])

  return (
    <div id='container'>
        <h2>Contacts</h2>
        <List contacts_list={contacts}/>
        <Form addContact={setContacts} contacts_form={contacts}/>
    </div>
    
  )
}

export default Contacts