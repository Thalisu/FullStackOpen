import { fetchBlogData, like } from "./blogSlice";
import { setNotification } from "../notification";
import blogService from "../../services/blogs";

export const fetchBlog = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(fetchBlogData(blogs));
  };
};

export const addLike = (blog) => {
  return async (dispatch) => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 };
    const uploadedBlog = await blogService.like(updatedBlog);
    dispatch(like(uploadedBlog.id));
    dispatch(
      setNotification(`successfully added your like to: "${blog.title}"`, 2)
    );
  };
};