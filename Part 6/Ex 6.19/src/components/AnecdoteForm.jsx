import { useDispatch } from "react-redux";
import { newAnec } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const content = event.target.anecInput.value;
    if (content.length > 4) {
      dispatch(newAnec(content));
      dispatch(setNotification("Anecdote successfully added", 2));
      return;
    }
    dispatch(
      setNotification("The length of the anecdote needs to be at least 5", 5)
    );
    return;
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div>
        <input name="anecInput" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
