import axios from 'axios';


const baseURL = "http://localhost:3000/api/v1/";

export const getAllBooks = async (endpoint) => {
    try {
        const token = localStorage.getItem('Authorization');

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
         };
        const res = await axios.get(baseURL+"book",config);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };