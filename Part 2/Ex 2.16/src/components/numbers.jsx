export const Numbers = ({ persons, setPersons, newFilter, remove }) => {
  if (persons === "") return <p>Loading...</p>;
  let phonebook = persons;
  if (newFilter !== "")
    phonebook = phonebook.filter((phonebook) =>
      phonebook.name.match(RegExp(newFilter, "i"))
    );
  const handleClick = (id) => {
    if (window.confirm("Do you really want to remove this person?")) {
      remove(id);
      setPersons(phonebook.filter((persons) => persons.id !== id));
    }
  };
  return phonebook.map((persons) => {
    return (
      <p key={persons.id}>
        NAME={persons.name} NUMBER={persons.number}{" "}
        <button onClick={() => handleClick(persons.id)}>Remove</button>
      </p>
    );
  });
};
