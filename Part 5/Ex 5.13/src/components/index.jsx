import { useState, useEffect } from "react";
import LoginForm from "./login/index";
import UserLogged from "./userLogged";
import blogService from "../services/blogs";
import NewBlogForm from "./createBlog/newBlog";
import Toggle from "../utils/toggleForms";
import PropTypes from "prop-types";

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
      <Toggle buttonLabel={"Add new blog"}>
        <NewBlogForm blogs={blogs} setMessage={setMessage} user={user} />
      </Toggle>
    </>
  );
};

Login.propTypes = {
  setMessage: PropTypes.func.isRequired,
  blogs: PropTypes.object.isRequired,
};

export default Login;
