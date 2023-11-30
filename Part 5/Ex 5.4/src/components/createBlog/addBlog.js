import blogService from "../../services/blogs";
const addBlog = async (event, { blogs, newBlog, setMessage }) => {
  event.preventDefault();
  const { blogs: Blogs, setBlogs } = blogs;

  console.log(Blogs, setBlogs, newBlog, setMessage);
  const createdBlog = await blogService.create(newBlog);
  setBlogs(Blogs.concat(createdBlog));
  setMessage(`Blog ${newBlog.title} added successfully`);
  setTimeout(() => {
    message(null);
  }, 5000);
};
export default addBlog;
