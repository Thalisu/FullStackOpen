import { useState } from "react";
import { Form } from "./components/form";
import { Numbers } from "./components/numbers";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "9298818883" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <Form
        setPersons={setPersons}
        persons={persons}
        setNewName={setNewName}
        newName={newName}
        setNewNumber={setNewNumber}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
