import { BrowserRouter as Router } from "react-router-dom";
import { Notification, NavBar, Routes } from "./components";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Notification />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
