import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/anecdoteReducer";
import { Provider } from "react-redux";
import App from "./App";

const store = configureStore({ reducer });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
