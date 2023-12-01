import blogService from "../../services/blogs";
const addBlog = async (
  event,
  { blogs: Blogs, setBlogs, newBlog, setMessage, user }
) => {
  event.preventDefault();
  let createdBlog = await blogService.create(newBlog);
  createdBlog = { ...createdBlog, user: { username: user.username } };
  setBlogs(Blogs.concat(createdBlog));
  setMessage(`Blog ${newBlog.title} added successfully`);
  setTimeout(() => {
    message(null);
  }, 5000);
};
export default addBlog;
