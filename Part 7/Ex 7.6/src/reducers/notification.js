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

export const setNotification = (content, timeoutInSec) => {
  return (dispatch) => {
    dispatch(notification(content));
    setTimeout(() => {
      dispatch(notification(""));
    }, timeoutInSec * 1000);
  };
};

export const { notification } = notificationSlice.actions;
export default notificationSlice.reducer;
