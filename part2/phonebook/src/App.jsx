import { useState } from "react";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("")

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: newName,
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

    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={{handleNumberChange}} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} />

      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
