export const Filter = ({ newFilter, setNewFilter }) => (
  <>
    <label htmlFor="search">Search for </label>
    <input
      id="search"
      type="text"
      value={newFilter}
      onChange={(event) => setNewFilter(event.target.value)}
    />
  </>
);
