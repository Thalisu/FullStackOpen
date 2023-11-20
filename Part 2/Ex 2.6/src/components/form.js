export const Form = ({ persons, setPersons, newName, setNewName }) => (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      setPersons(persons.concat({ name: newName }));
    }}
  >
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
