export const Number = ({ newNumber, setNewNumber }) => (
  <div>
    <label htmlFor="NewNumber">Number: </label>
    <input
      id="NewNumber"
      required="true"
      value={newNumber}
      onChange={(event) => setNewNumber(event.target.value)}
    />
  </div>
);
