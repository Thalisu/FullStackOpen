import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";

import anecReducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";
import notificationReducer from "./reducers/notificationReducer";

const store = configureStore({
  reducer: {
    anec: anecReducer,
    filter: filterReducer,
    notification: notificationReducer,
  },
});
//store.subscribe(() => console.log(store.getState()));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
