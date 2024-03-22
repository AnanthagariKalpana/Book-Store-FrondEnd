import axios from 'axios';


const baseURL = "http://localhost:3000/api/v1/";

export const getAllBooks = async (endpoint) => {
    try {
        const token = localStorage.getItem('Authorization');

    
        const res = await axios.get(baseURL+"book");
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getBook = async (endpoint) => {
    try {
        const token = localStorage.getItem('Authorization');

    
        const res = await axios.get(baseURL+endpoint);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };