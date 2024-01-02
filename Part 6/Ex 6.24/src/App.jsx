import { useQuery } from "@tanstack/react-query";
import { getAnecdotes } from "./requests";
import { NotificationContextProvider } from "./NotificationContext";
import NotificationDisplay from "./components/NotificationDisplay";
import NewAnecdoteForm from "./components/newAnecForm";
import AnecdoteList from "./components/anecdoteList";

const App = () => {
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

  return (
    <div>
      <h2>Anecdotes app</h2>
      <NotificationContextProvider>
        <NotificationDisplay />
        <NewAnecdoteForm />
        <AnecdoteList anecdotes={anecdotes} />
      </NotificationContextProvider>
    </div>
  );
};
export default App;
