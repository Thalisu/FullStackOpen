import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchBlog, addLike } from "../../reducers/blogs/actionCreators";
import Toggle from "../../utils/toggleBlogs";

const Blogs = () => {
  const blogs = useSelector((state) => state.blogSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const likeHandler = async (blog) => {
    dispatch(addLike(blog));
  };

  return (
    <ol>
      {blogs.map((blog) => (
        <li key={blog.id}>
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
              <button style={{ margin: "0 0 0 10px" }}>remove blog</button>
            </Toggle>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Blogs;
