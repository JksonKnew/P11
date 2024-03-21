import axios from "axios";
const API_URL = 'http://localhost:3001/api/v1';

// login
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/user/login`, {
            email,
            password,
      });
      return response;
    } catch (error) {
      throw error;
    }
};

//user
export const userInfo = async (Token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Token}`
    };
    try {
        const response = await axios.post(`${API_URL}/user/profile`, {}, {headers});
      return response;
    } catch (error) {
      throw error;
    }
}