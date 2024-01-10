import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addLike, deleteBlog } from "../reducers/actionCreators";
import Toggle from "../utils/toggleBlogs";

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  const likeHandler = (blog) => {
    dispatch(addLike(blog));
  };
  const removeBlog = (id) => {
    dispatch(deleteBlog(id));
  };

  return (
    <div>
      <h1>current added blogs</h1>
      <ol>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {console.log(blog)}
            <div>
              <span>{blog.title} </span>
              <Toggle>
                <p style={{ margin: "5px 0 2px 10px" }}>
                  url:{" "}
                  <a href={blog.url} target="_blank" rel="noreferrer">
                    {blog.url}
                  </a>
                </p>
                <p style={{ margin: "0 0 2px 10px" }}>
                  likes: {blog.likes}{" "}
                  <button type="button" onClick={() => likeHandler(blog)}>
                    Like
                  </button>
                </p>
                <p style={{ margin: "0 0 2px 10px" }}>
                  user who added: {blog.user.username}
                </p>
                {blog.user.username === loggedUser && (
                  <button
                    style={{ margin: "0 0 0 10px" }}
                    onClick={() => removeBlog(blog.id)}
                  >
                    remove blog
                  </button>
                )}
              </Toggle>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Blogs;
