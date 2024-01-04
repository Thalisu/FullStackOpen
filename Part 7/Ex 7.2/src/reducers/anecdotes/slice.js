import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const anecdoteSlice = createSlice({
  name: "anec",
  initialState,
  reducers: {
    addAnec(state, action) {
      const content = action.payload;
      state.push(content);
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

export const { addVote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
