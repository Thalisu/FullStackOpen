import { Blogs, Notification } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "./reducers/actionCreators";
import Login from "./components/LoginForm";

const App = () => {
  const user = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  const padding = {
    padding: 5,
  };
  return (
    <div>
      <Router>
        <div>
          <Link style={padding} to="/">
            Home
          </Link>
          {user ? (
            <em style={padding}>{user} logged in</em>
          ) : (
            <Link style={padding} to="/login">
              login
            </Link>
          )}
        </div>
        <Notification />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<Blogs />}
            loader={dispatch(fetchBlogData())}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;