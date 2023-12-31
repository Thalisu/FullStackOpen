import { setNotification } from "../reducers/notificationReducer";
import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

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

  const handleClick = (id, content, votes) => {
    try {
      dispatch(vote(content, id, votes));
      dispatch(setNotification(`You voted "${content}"`, 2));
    } catch (error) {
      dispatch(setNotification(`an error occurred: ${error}`, 5));
    }
  };

  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} votes{" "}
            <button
              onClick={() =>
                handleClick(anecdote.id, anecdote.content, anecdote.votes)
              }
            >
              vote
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AnecdoteList;
