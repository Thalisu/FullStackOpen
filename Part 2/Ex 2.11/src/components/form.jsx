import { Name } from "./form components/name";
import { Number } from "./form components/number";
export const Form = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    persons.every((x) => x.name !== newName)
      ? setPersons(persons.concat({ name: newName, number: newNumber }))
      : alert(`${newName} is already added to phonebook`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Name newName={newName} setNewName={setNewName} />
      <Number newNumber={newNumber} setNewNumber={setNewNumber} />
      <button type="submit">add</button>
    </form>
  );
};
