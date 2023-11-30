import blogService from "../../services/blogs";
const addBlog = async (
  event,
  { title, author, url, likes },
  { blogs, setBlogs }
) => {
  console.log(blogs);
  event.preventDefault();
  const newBlog = {
    title,
    author,
    url,
    likes,
  };
  const createdBlog = await blogService.create(newBlog);
  setBlogs(blogs.concat(createdBlog));
};
export default addBlog;
