import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchBlogData(state, action) {
      return action.payload;
    },
  },
});

export const { fetchBlogData } = blogSlice.actions;
export default blogSlice.reducer;
