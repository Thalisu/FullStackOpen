import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../reducers/blogs/blogSlice";

const store = configureStore({
  reducer: {
    blogSlice,
  },
});

export default store;
