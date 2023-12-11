import { useDispatch } from "react-redux";
import { addAnec } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  return (
    <form onSubmit={(event) => dispatch(addAnec(event))}>
      <div>
        <input name="anecInput" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
