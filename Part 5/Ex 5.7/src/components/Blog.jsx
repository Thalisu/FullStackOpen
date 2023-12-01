import Toggle from "../utils/toggleBlogs";

const Blog = ({ blogs }) => {
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
            <p style={{ margin: "0 0 0 5px" }}>Likes: {blog.likes}</p>
            <p style={{ margin: "0 0 10px 5px" }}>
              Sent by: {blog.user.username}
            </p>
          </Toggle>
        </li>
      ))}
    </ol>
  );
};

export default Blog;
