import { configureStore } from "@reduxjs/toolkit";
import anecdotes from "./reducers/anecdotes/slice";

const store = configureStore({
  reducer: {
    anecdotes,
  },
});

export default store;
