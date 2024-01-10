import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addLike } from "../reducers/actionCreators";

const Blog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === id)
  );

  const likeHandler = (blog) => {
    dispatch(addLike(blog));
  };

  return (
    blog && (
      <div>
        <h1>{blog.title}</h1>
        <p>
          <a href={blog.url}>{blog.url}</a>
        </p>
        <p>
          {blog.likes} likes{" "}
          <button type="button" onClick={() => likeHandler(blog)}>
            Like
          </button>
        </p>
        <p>
          added by{" "}
          <Link to={`/users/${blog.user.id}`}>{blog.user.username}</Link>
        </p>
      </div>
    )
  );
};
export default Blog;
