export const Name = ({ newName, setNewName }) => (
  <div>
    <label htmlFor="NewName">Name: </label>
    <input
      id="NewName"
      required
      value={newName}
      onChange={(event) => setNewName(event.target.value)}
    />
  </div>
);
