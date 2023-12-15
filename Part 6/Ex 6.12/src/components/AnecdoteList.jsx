import { addVote } from "../reducers/anecdoteReducer";
import { changeNotification } from "../reducers/notificationReducer";
import { useSelector, useDispatch } from "react-redux";

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector((state) => {
    if (state.filter === "ALL")
      return [].concat(state.anec).sort((a, b) => a.votes < b.votes);
    return []
      .concat(state.anec)
      .filter((anec) =>
        anec.content.toLowerCase().includes(state.filter.toLowerCase())
      )
      .sort((a, b) => a.votes < b.votes);
  });

  const handleClick = (id, content) => {
    dispatch(changeNotification(`You voted "${content}"`));
    setTimeout(() => {
      dispatch(changeNotification(""));
    }, 2000);
    dispatch(addVote(id));
  };

  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} votes{" "}
            <button onClick={() => handleClick(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AnecdoteList;
