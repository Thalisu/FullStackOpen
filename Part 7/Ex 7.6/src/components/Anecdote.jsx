import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Anecdote = () => {
  const id = Number(useParams().id);
  const anecdote = useSelector((state) => {
    return state.anecdotes.find((anecdote) => anecdote.id === id);
  });
  return (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      <p>has {anecdote.votes} votes</p>
      <p>for more info see {anecdote.info}</p>
    </div>
  );
};
export default Anecdote;
