import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./reducers/blogs/blogSlice";
import notification from "./reducers/notification";

const store = configureStore({
  reducer: {
    blogSlice,
    notification,
  },
});

export default store;
