import { useState, useEffect } from "react";
import { Form } from "./components/form";
import { Numbers } from "./components/numbers";
import { Filter } from "./components/filter";
import phoneService from "./services/phonebook";
const App = () => {
  const [persons, setPersons] = useState("");
  useEffect(() => {
    phoneService.getAll().then((initialPhoneBook) => {
      return setPersons(initialPhoneBook);
    });
  }, []);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>Numbers</h2>
      <Numbers
        persons={persons}
        setPersons={setPersons}
        newFilter={newFilter}
        remove={phoneService.remove}
      />
      <h2>Add a new</h2>
      <Form
        setPersons={setPersons}
        persons={persons}
        setNewName={setNewName}
        newName={newName}
        setNewNumber={setNewNumber}
        newNumber={newNumber}
        create={phoneService.create}
      />
    </div>
  );
};

export default App;
