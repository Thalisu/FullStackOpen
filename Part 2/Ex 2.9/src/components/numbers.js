export const Numbers = ({ persons, newFilter }) => {
  let phonebook = persons;
  if (newFilter !== "")
    phonebook = phonebook.filter((phonebook) =>
      phonebook.name.match(RegExp(newFilter, "i"))
    );
  return phonebook.map((persons, i) => {
    return (
      <p key={i}>
        {persons.name} {persons.number}
      </p>
    );
  });
};
