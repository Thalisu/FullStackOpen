import { fetchBlogData } from "./blogSlice";


export const fetchBlog = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(fetchBlogData(blogs));
  };
};
