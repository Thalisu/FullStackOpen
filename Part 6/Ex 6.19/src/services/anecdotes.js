import axios from "axios";

const baseUrl = "http://localhost:3001/anec";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};
const plusVote = async (newObject, id) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

export default { getAll, createNew, plusVote };
