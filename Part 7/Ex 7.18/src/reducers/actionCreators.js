import blogService from "../services/blogs";
import loginService from "../services/login";
import usersService from "../services/users";
import { fetchBlogs, like, pushBlog, filterBlog, comment } from "./blogs";
import { fetchUsers } from "./users";
import { notification } from "./notification";
import { login } from "./loggedUser";

export const deleteBlog = (id) => {
  return async (dispatch) => {
    await blogService.deleteBlog(id);
    dispatch(filterBlog(id));
    dispatch(setNotification(`successfully deleted`, 2));
  };
};

export const postBlog = (content, user) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(content);
    const postedBlog = { ...newBlog, user: { username: user } };
    dispatch(pushBlog(postedBlog));
    dispatch(setNotification(`successfully added "${postedBlog.title}"`, 2));
  };
};

export const fetchBlogData = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(fetchBlogs(blogs));
  };
};

export const fetchUsersData = () => {
  return async (dispatch) => {
    const users = await usersService.getAll();
    dispatch(fetchUsers(users));
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

export const addComment = (blog, value) => {
  return async (dispatch) => {
    const updatedBlog = { ...blog, comments: blog.comments.concat([value]) };
    const uploadedBlog = await blogService.comment(updatedBlog);
    dispatch(comment({ id: uploadedBlog.id, comment: value }));
    dispatch(
      setNotification(`successfully added a comment to: "${blog.title}"`, 2)
    );
  };
};
