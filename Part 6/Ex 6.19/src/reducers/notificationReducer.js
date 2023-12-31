import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeNotification(state, action) {
      return action.payload;
    },
  },
});

export const setNotification = (content, timeoutInSec) => {
  return (dispatch) => {
    dispatch(changeNotification(content));
    setTimeout(() => {
      dispatch(changeNotification(""));
    }, timeoutInSec * 1000);
  };
};
export const { changeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
