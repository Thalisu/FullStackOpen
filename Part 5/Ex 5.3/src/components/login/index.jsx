import LoginForm from "./loginForm";
import UserLogged from "./userLogged";
import blogService from "../../services/blogs";
import NewBlogForm from "../createBlog/newBlog";
import { useState, useEffect } from "react";
const Login = ({ error, blogs, blogs: setBlogs }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);
  return user === null ? (
    <LoginForm setUser={setUser} error={error} />
  ) : (
    <>
      <UserLogged user={user} setUser={setUser} />
      <NewBlogForm blogs={blogs} setBlogs={setBlogs} />
    </>
  );
};

export default Login;
