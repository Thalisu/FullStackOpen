import blogService from "../../services/blogs";
import loginService from "../../services/login";
const handleLogin = async (
  event,
  error,
  setUser,
  { username, password },
  setCredentials
) => {
  event.preventDefault();
  try {
    const user = await loginService.login({ username, password });

    window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user));
    blogService.setToken(user.token);
    setUser(user);
    setCredentials({
      username: "",
      password: "",
    });
  } catch (exception) {
    error("Wrong credentials");
    setTimeout(() => {
      error(null);
    }, 5000);
  }
};
export default handleLogin;
