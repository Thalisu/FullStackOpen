import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAnecdotes, createAnecdote, updateAnecdote } from "./requests";

const App = () => {
  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(["anecdotes"]);
      queryClient.setQueryData(["anecdotes"], anecdotes.concat(newAnecdote));
    },
  });

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (a, updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData(["anecdotes"]);
      queryClient.setQueryData(
        ["anecdotes"],
        anecdotes.toSpliced(updatedAnecdote.id - 1, 1, updatedAnecdote)
      );
    },
  });

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.Anecdote.value;
    event.target.Anecdote.value = "";
    if (content.length > 4) newAnecdoteMutation.mutate({ content, votes: 0 });
  };

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
  };

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: () => getAnecdotes(),
    refetchOnWindowFocus: false,
    retry: 1,
  });

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  if (result.isError) {
    return <div>anecdote service not available due to problems in server</div>;
  }

  const anecdotes = result.data;
  const style = {
    margin: "0 0 10px 0",
  };

  return (
    <div>
      <h2>Anecdotes app</h2>
      <form onSubmit={(event) => addAnecdote(event)}>
        <input name="Anecdote" />
        <button type="submit">add</button>
      </form>
      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>
            {anecdote.content}{" "}
            <button onClick={() => handleVote(anecdote)}>Vote</button>
            <p style={style}>has {anecdote.votes} votes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
