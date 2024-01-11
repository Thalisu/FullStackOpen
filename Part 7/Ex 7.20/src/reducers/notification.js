import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    notification(state, action) {
      return action.payload;
    },
  },
});



export const { notification } = notificationSlice.actions;
export default notificationSlice.reducer;
