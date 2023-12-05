import Toggle from "./toggle";
const Blog = ({ blog }) => {
  return (
    <li className="blog">
      <p id="title">title: {blog.title}</p>
      <p id="author">author: {blog.author}</p>
      <Toggle id="togglable">
        <p id="url">url: {blog.url}</p>
        <p id="likes">likes: {blog.likes}</p>
      </Toggle>
    </li>
  );
};
export default Blog;
