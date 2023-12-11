import { useSelector, useDispatch } from "react-redux";
import { addVote, addAnec } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    return [].concat(state).sort((a, b) => a.votes < b.votes);
  });

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(addVote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={(event) => dispatch(addAnec(event))}>
        <div>
          <input name="anecInput" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
