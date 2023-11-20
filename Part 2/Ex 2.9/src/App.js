import { useState } from "react";
import { Form } from "./components/form";
import { Numbers } from "./components/numbers";
import { Filter } from "./components/filter";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "9298818883" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>Numbers</h2>
      <Numbers persons={persons} newFilter={newFilter} />
      <h2>Add a new</h2>
      <Form
        setPersons={setPersons}
        persons={persons}
        setNewName={setNewName}
        newName={newName}
        setNewNumber={setNewNumber}
        newNumber={newNumber}
      />
    </div>
  );
};

export default App;
