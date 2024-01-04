import { configureStore } from "@reduxjs/toolkit";
import anecdotes from "./reducers/anecdotes/slice";
import notification from "./reducers/notification";

const store = configureStore({
  reducer: {
    anecdotes,
    notification,
  },
});

export default store;
