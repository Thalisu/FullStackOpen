import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAnecdote } from "../reducers/anecdotes/slice";
import { setNotification } from "../reducers/notification";

const CreateNew = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    content: "",
    author: "",
    info: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addAnecdote(formData));
    dispatch(
      setNotification(`anecdote "${formData.content}" successfully added`, 2)
    );
    navigate("/");
    setFormData({
      content: "",
      author: "",
      info: "",
    });
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          content
          <input
            name="content"
            value={formData.content}
            onChange={({ target }) =>
              setFormData({ ...formData, content: target.value })
            }
          />
        </div>
        <div>
          author
          <input
            name="author"
            value={formData.author}
            onChange={({ target }) =>
              setFormData({ ...formData, author: target.value })
            }
          />
        </div>
        <div>
          url for more info
          <input
            name="info"
            value={formData.info}
            onChange={({ target }) =>
              setFormData({ ...formData, info: target.value })
            }
          />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};
export default CreateNew;
