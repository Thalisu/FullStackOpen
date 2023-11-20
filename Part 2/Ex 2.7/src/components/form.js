export const Form = ({ persons, setPersons, newName, setNewName }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    persons.every((x) => x.name !== newName)
      ? setPersons(persons.concat({ name: newName }))
      : alert(`${newName} is already added to phonebook`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="setNew">name: </label>
        <input
          id="setNew"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};
