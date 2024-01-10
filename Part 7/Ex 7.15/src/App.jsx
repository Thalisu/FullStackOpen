import {
  Blogs,
  Notification,
  Login,
  PostBlog,
  Users,
  User,
  Blog,
} from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlogData,
  fetchUsersData,
  fetchUser,
  logout,
} from "./reducers/actionCreators";
import { useEffect } from "react";

const App = () => {
  const user = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();
  const padding = {
    padding: 5,
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(fetchUser(user));
    }
  }, [dispatch]);

  return (
    <div>
      <Router>
        <div>
          <Link style={padding} to="/">
            Home
          </Link>
          <Link style={padding} to="/users">
            Users
          </Link>
          {user ? (
            <>
              <Link style={padding} to="/post">
                Add a blog
              </Link>
              <em style={padding}>{user} logged in</em>
              <button
                onClick={() => {
                  dispatch(logout());
                }}
              >
                logout
              </button>
            </>
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
          <Route path="/post" element={<PostBlog />} />
          <Route
            path="/users"
            element={<Users />}
            loader={dispatch(fetchUsersData())}
          />
          <Route path="/users/:id" element={<User />} />
          <Route path="/blogs/:id" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
