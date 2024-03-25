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

  export const getCart = async (endpoint) => {
    try {
      const header = {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      };

      console.log("Attempting to fetch cart...");
      console.log("Endpoint:", baseURL + "cart");
      console.log("Headers:", header);
      console.log("-------------");
      const res = await axios.get(baseURL +"cart", { headers: header });
      
      console.log(res,"**********");
  
      const bookData = res.data.data;
  
      return bookData;
    } 
    catch (error) {
      // Handle errors
      console.error("Error fetching books:", error);
      throw error;
    }
  };

  export const updateCart = async (endpoint) => {
    try {
      const header = {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      };
      const response = await axios.post(baseURL + endpoint, {}, { headers: header } );
      const bookData = response.data;
  
      return bookData;
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };