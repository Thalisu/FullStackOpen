const Blog = ({ blog }) => {
  return (
    <li className="blog">
      <p id="title">{blog.title}</p>
      <p id="author">{blog.author}</p>
    </li>
  );
};
export default Blog;
