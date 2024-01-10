import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchBlogs(state, action) {
      return action.payload;
    },
    like(state, action) {
      const id = action.payload;
      const toChange = state.find((a) => a.id === id);
      const changed = {
        ...toChange,
        likes: toChange.likes + 1,
      };
      return state.map((blog) => (blog.id !== id ? blog : changed));
    },
    pushBlog(state, action) {
      const content = action.payload;
      state.push(content);
    },
    filterBlog(state, action) {
      const id = action.payload;
      return state.filter((state) => state.id !== id);
    },
  },
});

export const { fetchBlogs, like, pushBlog, filterBlog } = blogSlice.actions;
export default blogSlice.reducer;
