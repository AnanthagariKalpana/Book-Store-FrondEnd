import axios from "axios";
const baseURL = "http://localhost:3000/api/v1/";


export const createUser = async (endpoint, body) => {
    try {
      return await axios.post(baseURL + endpoint, body);
    } catch (error) {
      console.log(error);
    }
  };

  
export const login = async (endpoint, body) => {
    try {
      const response = await axios.post(baseURL + endpoint, body);
      localStorage.setItem("Token", response?.data.data);
      return;
    } catch (error) {
      console.log(error);
    }
  };