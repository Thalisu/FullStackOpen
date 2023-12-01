import blogService from "../../services/blogs";
const handleClick = async (blog, likes, setLikes) => {
  const updatedBlog = {
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: likes + 1,
    user: blog.user.id,
  };
  try {
    await blogService.like(updatedBlog, blog.id);
    setLikes(likes + 1);
  } catch (error) {
    console.log(error);
  }
};
export default handleClick;
