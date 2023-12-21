import { createSlice } from "@reduxjs/toolkit";

const initialState = "ALL";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, action) {
      if (action.payload !== "") return action.payload;
      return initialState;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
