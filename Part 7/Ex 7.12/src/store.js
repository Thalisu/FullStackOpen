import { configureStore } from "@reduxjs/toolkit";
import { blogs, notification, loggedUser } from "./reducers";

const store = configureStore({
  reducer: {
    blogs,
    notification,
    loggedUser,
  },
});

export default store;
