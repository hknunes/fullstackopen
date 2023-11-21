/* eslint-disable react/prop-types */
const Numbers = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <p key={person.id}>{person.name}</p>
      ))}
    </div>
  );
};

export default Numbers;
