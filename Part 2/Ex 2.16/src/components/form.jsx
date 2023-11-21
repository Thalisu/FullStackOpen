import { Name } from "./form components/name";
import { Number } from "./form components/number";
export const Form = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  create,
  setMessage,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    persons.every((x) => x.name !== newName)
      ? addPersons()
      : alert(`${newName} is already added to phonebook`);
  };

  const addPersons = () => {
    setPersons(persons.concat({ name: newName, number: newNumber }));
    create({ name: newName, number: newNumber });
    setMessage(`${newName} has been added :D`);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Name newName={newName} setNewName={setNewName} />
      <Number newNumber={newNumber} setNewNumber={setNewNumber} />
      <button type="submit">add</button>
    </form>
  );
};
