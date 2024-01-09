import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetch(state, action) {
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

  },
});

export const { fetch, like } = blogSlice.actions;
export default blogSlice.reducer;
