import { createSlice } from "@reduxjs/toolkit";
import anecService from "../services/anecdotes";

const anecdotesAtStart = {
  anec: [],
  filter: "ALL",
};

const initialState = anecdotesAtStart.anec;

const anecSlice = createSlice({
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
    appendAnec(state, action) {
      state.push(action.payload);
    },
    setAnec(state, action) {
      return action.payload;
    },
  },
});

export const initializeAnec = () => {
  return async (dispatch) => {
    const anecdotes = await anecService.getAll();
    dispatch(setAnec(anecdotes));
  };
};
export const newAnec = (content) => {
  return async (dispatch) => {
    const anecdotes = await anecService.createNew(content);
    console.log(anecdotes);
    dispatch(addAnec(anecdotes));
  };
};

export const { addAnec, addVote, appendAnec, setAnec } = anecSlice.actions;
export default anecSlice.reducer;
