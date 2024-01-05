import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getAll = async () => {
  try {
    const response = await axios.get(`${baseUrl}/all`);
    return response.data;
  } catch (error) {
    console.log(error.code);
  }
};
const get = async (country) => {
  try {
    const response = await axios.get(`${baseUrl}/name/${country}`);
    return response.data;
  } catch (error) {
    return "fetchData";
  }
};

export default { getAll, get };
