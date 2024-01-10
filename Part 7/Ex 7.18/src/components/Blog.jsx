import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addComment, addLike } from "../reducers/actionCreators";
import { useField } from "../hooks";

const Blog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const comment = useField("text");
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === id)
  );

  const likeHandler = (blog) => {
    dispatch(addLike(blog));
  };

  const commentHandler = (event) => {
    event.preventDefault();
    dispatch(addComment(blog, comment.value));
  };

  return (
    blog && (
      <div>
        <h1>{blog.title}</h1>
        <p style={{ margin: "0 0 5px" }}>
          <a href={blog.url}>{blog.url}</a>
        </p>
        <p style={{ margin: "0 0 5px" }}>
          {blog.likes} likes{" "}
          <button type="button" onClick={() => likeHandler(blog)}>
            Like
          </button>
        </p>
        <p style={{ margin: "0 0 15px" }}>
          added by{" "}
          <Link to={`/users/${blog.user.id}`}>{blog.user.username}</Link>
        </p>
        <h3 style={{ margin: 0 }}>comments</h3>
        <form onSubmit={(event) => commentHandler(event)}>
          <input {...comment} />
          <button type="submit">add comment</button>
        </form>
        {blog.comments[0] ? (
          <ul>
            {blog.comments.map((comment, i) => (
              <li key={i}>{comment}</li>
            ))}
          </ul>
        ) : (
          <p style={{ margin: 0 }}>
            no comments added, be the first to comment!
          </p>
        )}
      </div>
    )
  );
};
export default Blog;
