/* import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAnecdote } from "../reducers/anecdotes/slice";
import { setNotification } from "../reducers/notification";

const useSubmitHandler = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event, content, author, info) => {
    event.preventDefault();
    const formData = {
      content: content.value,
      author: author.value,
      info: info.value,
    };
    dispatch(addAnecdote(formData));
    dispatch(
      setNotification(`anecdote "${formData.content}" successfully added`, 2)
    );
    navigate("/");
  };
  return handleSubmit;
};

export default useSubmitHandler;
 */
