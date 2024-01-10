import axios from "axios";
const baseUrl = "http://localhost:3003/blogs";

let token = null;
const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const request = await axios.get(baseUrl);
  const blogs = request.data.sort((a, b) => b.likes - a.likes);
  return blogs;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const deleteBlog = async (id, user) => {
  const config = {
    headers: { Authorization: token },
    data: { user: user },
  };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

const like = async (blog) => {
  const { id, ...updatedBlog } = blog;
  const response = await axios.put(`${baseUrl}/${id}`, updatedBlog);
  return response.data;
};

const comment = async (blog) => {
  const { id, ...updatedBlog } = blog;
  const response = await axios.put(`${baseUrl}/${id}`, updatedBlog);
  return response.data;
};

export default { getAll, create, setToken, like, comment, deleteBlog };
