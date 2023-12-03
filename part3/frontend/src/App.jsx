import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import personsService from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState(null);
  const getPersons = () => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  };

  useEffect(getPersons, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (!persons.some((person) => person.name === newName)) {
      personsService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNotification(`Added ${personObject.name}`);
          setTimeout(() => {
            setNotification(null);
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (
        window.confirm(
          `${personObject.name} is already added to phonebook, replace the old number with a new namber?`
        )
      ) {
        const personObj = persons.find((person) => person.name === newName);
        const changedPerson = { ...personObj, number: newNumber };
        personsService
          .update(changedPerson.id, personObject)
          .then((updatedPerson) => {
            setPersons(
              persons.map((n) =>
                n.id !== changedPerson.id ? n : updatedPerson
              )
            );
            setNotification(`Updated ${personObject.name}`);
            setTimeout(() => {
              setNotification(null);
            }, 1000);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const filteredPersons = () =>
      persons.filter((person) => person.name.includes(filter));
    setPersons(filteredPersons);
  };

  const handleDelete = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.remove(id);
      setPersons(persons.filter((persons) => persons.id !== id));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notification} />
      <Filter value={filter} onChange={handleFilterChange} />

      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} onDelete={handleDelete} />
    </div>
  );
};

export default App;
