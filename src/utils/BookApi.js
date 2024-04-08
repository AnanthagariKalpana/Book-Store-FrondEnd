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
      const token = localStorage.getItem('Token');
      const config = {
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type':  'application/json'
        }
      };
      const res = await axios.get(baseURL +endpoint, config);
  
      return res;
    } 
    catch (error) {
      // Handle errors
      console.error("Error fetching books:", error);
      throw error;
    }
  };

  export const updateCart = async (endpoint) => {
    try {
      const token = localStorage.getItem('Token');
      const config = {
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type':  'application/json'
        }
      };
      const response = await axios.post(baseURL + endpoint, {}, config );
      console.log(response);
      const bookData = response.data;
  
      return bookData; 
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };

  export const removeCart = async (endpoint) => {
    try {
      const token = localStorage.getItem('Token');
      const config = {
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type':  'application/json'
        }
      };
      const response = await axios.delete(baseURL + endpoint,  config );
      console.log(response);
      const bookData = response.data;
  
      return bookData; 
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };

  export const deleteCart = async (endpoint) => {
    try {
      const token = localStorage.getItem('Token');
      const config = {
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type':  'application/json'
        }
      };
      const response = await axios.delete(baseURL + endpoint,  config );
      console.log(response);
      const bookData = response.data;
  
      return bookData; 
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };

  export const getWishList = async (endpoint) => {
    try {
      const token = localStorage.getItem('Token');
      const config = {
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type':  'application/json'
        }
      };
      const res = await axios.get(baseURL +endpoint, config);
  
      const bookData = res.data;
  
      return bookData; 
    } 
    catch (error) {
      // Handle errors
      console.error("Error fetching books:", error);
      throw error;
    }
  };

  export const updateWishlist = async (endpoint) => {
    try {
      const token = localStorage.getItem('Token');
      const config = {
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type':  'application/json'
        }
      };
      const response = await axios.post(baseURL + endpoint, {}, config );
      console.log(response);
      const bookData = response.data;
  
      return bookData; 
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  };