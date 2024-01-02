import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "../requests";
import { useNotificationDispatch } from "../NotificationContext";

const NewAnecdoteForm = () => {
  const dispatch = useNotificationDispatch();
  const queryClient = useQueryClient();
  const newAnecdote = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(["anecdotes"]);
      queryClient.setQueryData(["anecdotes"], anecdotes.concat(newAnecdote));
      dispatch("Successfully added a new anecdote", 5);
    },
  });

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.Anecdote.value;
    event.target.Anecdote.value = "";
    if (content.length > 4) newAnecdote.mutate({ content, votes: 0 });
  };

  return (
    <form onSubmit={(event) => addAnecdote(event)}>
      <input name="Anecdote" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewAnecdoteForm;
