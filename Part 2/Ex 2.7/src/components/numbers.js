export const Numbers = ({ persons }) =>
  persons.map((persons, i) => {
    return <p key={i}>{persons.name}</p>;
  });
