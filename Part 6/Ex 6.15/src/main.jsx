import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import anecService from "./services/anecdotes";
import App from "./App";

import anecReducer, { setAnec } from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";
import notificationReducer from "./reducers/notificationReducer";

const store = configureStore({
  reducer: {
    anec: anecReducer,
    filter: filterReducer,
    notification: notificationReducer,
  },
});
anecService.getAll().then((anecdotes) => store.dispatch(setAnec(anecdotes)));
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
