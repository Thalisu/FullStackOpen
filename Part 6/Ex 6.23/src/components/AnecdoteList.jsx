import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAnecdote } from "../requests";
import { useNotificationDispatch } from "../NotificationContext";
const AnecdoteList = ({ anecdotes }) => {
  console.log(anecdotes);
  const style = {
    margin: "0 0 10px 0",
  };
  const dispatch = useNotificationDispatch();

  const queryClient = useQueryClient();
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (a, updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData(["anecdotes"]);
      queryClient.setQueryData(
        ["anecdotes"],
        anecdotes.toSpliced(updatedAnecdote.id - 1, 1, updatedAnecdote)
      );
      dispatch(`successfully voted for ${updatedAnecdote.content}`, 2);
    },
  });

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
  };

  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          {anecdote.content}{" "}
          <button onClick={() => handleVote(anecdote)}>Vote</button>
          <p style={style}>has {anecdote.votes} votes</p>
        </li>
      ))}
    </ul>
  );
};

AnecdoteList.propTypes = {
  anecdotes: PropTypes.array.isRequired,
};
export default AnecdoteList;
