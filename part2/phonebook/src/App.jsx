import { useState } from 'react';
import Numbers from './components/Numbers';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: newName,
      number: newNumber,
    };

    const isDuplicated = persons.some((element) => {
      if (element.id === personObject.id) {
        return true;
      }
      return false;
    });

    if (isDuplicated) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else {
      setPersons(persons.concat(personObject));
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
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with:{' '}
        <input
          type="search"
          value={filter}
          onChange={handleFilterChange}
        ></input>
      </div>

      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
