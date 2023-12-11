import { addVote } from "../reducers/anecdoteReducer";
import { useSelector, useDispatch } from "react-redux";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    return [].concat(state).sort((a, b) => a.votes < b.votes);
  });
  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(addVote(anecdote.id))}>vote</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AnecdoteList;
