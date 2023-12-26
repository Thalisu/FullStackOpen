import { useDispatch } from "react-redux";
import { newAnec } from "../reducers/anecdoteReducer";
import { changeNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const content = event.target.anecInput.value;
    if (content.length > 4) {
      dispatch(newAnec(content));
      dispatch(changeNotification("Anecdote successfully added"));
      setTimeout(() => {
        dispatch(changeNotification(""));
      }, 5000);
    }
    dispatch(
      changeNotification("The length of the anecdote needs to be at least 5")
    );
    setTimeout(() => {
      dispatch(changeNotification(""));
    }, 5000);
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
