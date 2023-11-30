import LoginForm from "./login/loginForm";
import UserLogged from "./login/userLogged";
import blogService from "../services/blogs";
import NewBlogForm from "./createBlog/newBlog";
import { useState, useEffect } from "react";
const Login = ({ setMessage, blogs }) => {
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
    <LoginForm setUser={setUser} setMessage={setMessage} />
  ) : (
    <>
      <UserLogged user={user} setUser={setUser} />
      <NewBlogForm blogs={blogs} setMessage={setMessage} />
    </>
  );
};

export default Login;
