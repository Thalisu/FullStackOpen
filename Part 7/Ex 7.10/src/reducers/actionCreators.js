import blogService from "../services/blogs";
import loginService from "../services/login";
import { fetch, like, pushBlog } from "./blogs";
import { notification } from "./notification";
import { login } from "./loggedUser";

export const postBlog = (content) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(content);
    
    dispatch(pushBlog(newBlog));
  };
};

export const fetchBlogData = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(fetch(blogs));
  };
};

export const setUser = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user));
      blogService.setToken(user.token);
      dispatch(login(username));
    } catch (err) {
      console.log(err);
      dispatch(setNotification(`Wrong credentials`, 2));
    }
  };
};

export const fetchUser = (user) => {
  return async (dispatch) => {
    blogService.setToken(user.token);
    dispatch(login(user.username));
  };
};

export const logout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("loggedBlogAppUser");
    blogService.setToken("");
    dispatch(login(""));
  };
};

export const setNotification = (content, timeoutInSec) => {
  return (dispatch) => {
    dispatch(notification(content));
    setTimeout(() => {
      dispatch(notification(""));
    }, timeoutInSec * 1000);
  };
};

export const addLike = (blog) => {
  return async (dispatch) => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 };
    const uploadedBlog = await blogService.like(updatedBlog);
    dispatch(like(uploadedBlog.id));
    dispatch(
      setNotification(`successfully added your like to: "${blog.title}"`, 2)
    );
  };
};
