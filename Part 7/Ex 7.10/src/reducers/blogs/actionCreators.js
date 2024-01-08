import { fetchBlogData } from "./blogSlice";
import blogService from "../../services/blogs";

export const fetchBlog = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(fetchBlogData(blogs));
  };
};
