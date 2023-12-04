import Toggle from "../../utils/toggleBlogs";
import Likes from "./likes";
import blogService from "../../services/blogs";

const blog = ({ blogs, setBlogs }) => {
  return (
    <ol>
      {blogs.map((blog) => (
        <li key={blog.id}>
          {blog.title} {blog.author}{" "}
          <Toggle>
            <p style={{ margin: "5px 5px 0" }}>
              Url:{" "}
              <a href={blog.url} target="blank">
                {blog.url}
              </a>
            </p>
            <Likes blog={blog} />
            <p style={{ margin: "0 0 10px 5px" }}>
              Sent by: {blog.user.username}
            </p>
            <button onClick={() => deleteBlog(blog.id, blogs, setBlogs)}>
              remove
            </button>
          </Toggle>
        </li>
      ))}
    </ol>
  );
};

const deleteBlog = async (id, blogs, setBlogs) => {
  try {
    await blogService.deleteBlog(id);
    setBlogs(blogs.filter((blog) => blog.id !== id));
  } catch (error) {
    console.log(error);
  }
};
export default blog;
