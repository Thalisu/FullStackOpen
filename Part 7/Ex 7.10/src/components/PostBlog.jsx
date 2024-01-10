import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { postBlog } from "../reducers/actionCreators";

const NewBlogForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loggedUser);
  const title = useField("text");
  const author = useField("text");
  const url = useField("text");

  const addBlog = (event) => {
    event.preventDefault();
    const newBlog = {
      title: title.value,
      author: author.value,
      url: url.value,
      likes: 0,
    };
    dispatch(postBlog(newBlog, user));
    navigate("/");
  };

  return (
    <form onSubmit={(event) => addBlog(event)}>
      <h4>wish to send a blog?</h4>
      <label htmlFor="title">Title:</label>
      <input id="title" {...title} />
      <label htmlFor="author">Author:</label>
      <input id="author" {...author} />
      <label htmlFor="url">Url:</label>
      <input id="url" {...url} />
      <button type="submit">send</button>
    </form>
  );
};

export default NewBlogForm;
