import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const anecdoteSlice = createSlice({
  name: "anec",
  initialState,
  reducers: {
    addAnecdote(state, action) {
      const { content, author, info } = action.payload;
      // remove when bac
      const id = state[state.length - 1].id + 1;
      state.push({ content, author, info, votes: 0, id });
    },
    addVote(state, action) {
      const id = action.payload;
      const toChange = state.find((a) => a.id === id);
      const changed = {
        ...toChange,
        votes: toChange.votes + 1,
      };
      return state.map((anec) => (anec.id !== id ? anec : changed));
    },
  },
});

export const { addVote, addAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
