import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = id => {
    return setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const formSubmitHandler = ({ name, number }) => {
    const todo = {
      id: nanoid(),
      name,
      number,
    };
    repeatControlsContact(todo)
      ? alert(`${todo.name} is already in contacts!!!`)
      : setContacts(prevContacts => [...prevContacts, todo]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleFilterList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const repeatControlsContact = element => {
    return contacts.find(
      contact => contact.name.toLowerCase() === element.name.toLowerCase()
    );
  };

  return (
    <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      <ContactList
        contact={getVisibleFilterList()}
        onDeleteContact={deleteContacts}
      />
    </div>
  );
}
export default App;