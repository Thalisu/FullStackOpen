export const Numbers = ({ persons, newFilter }) => {
  if (persons === "") return <p>Loading...</p>;
  let phonebook = persons;
  if (newFilter !== "")
    phonebook = phonebook.filter((phonebook) =>
      phonebook.name.match(RegExp(newFilter, "i"))
    );
  return phonebook.map((persons, i) => {
    return (
      <p key={i}>
        NAME={persons.name} NUMBER={persons.number}
      </p>
    );
  });
};
