export const Number = ({ newNumber, setNewNumber }) => (
  <div>
    <label htmlFor="NewNumber">Number: </label>
    <input
      id="NewNumber"
      required
      value={newNumber}
      onChange={(event) => setNewNumber(event.target.value)}
    />
  </div>
);
