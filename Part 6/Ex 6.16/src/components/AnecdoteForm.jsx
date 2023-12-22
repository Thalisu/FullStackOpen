import { useDispatch } from "react-redux";
import { addAnec } from "../reducers/anecdoteReducer";
import { changeNotification } from "../reducers/notificationReducer";
import anecService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const content = event.target.anecInput.value;
    if (content.length > 4) {
      const newAnec = await anecService.createNew(content);
      console.log(newAnec);
      dispatch(addAnec(newAnec));
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
