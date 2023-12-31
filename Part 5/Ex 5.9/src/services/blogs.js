import axios from "axios";
const baseUrl = "http://localhost:3003/blogs";

let token = null;
const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const like = async (newObject, id) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

export default { getAll, create, setToken, like };
