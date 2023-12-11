import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    return [].concat(state).sort((a, b) => a.votes < b.votes);
  });

  const addVote = (id) => dispatch({ type: "INCREASE", payload: { id } });

  const addAnec = (event) => {
    event.preventDefault();
    const content = event.target.anecInput.value;
    dispatch({ type: "NEW_ANEC", payload: { content } });
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={(event) => addAnec(event)}>
        <div>
          <input name="anecInput" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
