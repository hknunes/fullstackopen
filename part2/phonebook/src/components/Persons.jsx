/* eslint-disable react/prop-types */
const Persons = ({ persons, onDelete }) => {
  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => onDelete(person.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
