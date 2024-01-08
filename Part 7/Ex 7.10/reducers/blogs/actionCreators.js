import { fetchBlogData } from "./blogSlice";
import blogService from "../../src/services/blogs";

export const fetchBlog = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(fetchBlogData(blogs));
  };
};
