import { configureStore } from "@reduxjs/toolkit";
import { blogs, notification, loggedUser, users } from "./reducers";

const store = configureStore({
  reducer: {
    blogs,
    users,
    notification,
    loggedUser,
  },
});

export default store;
