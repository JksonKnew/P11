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

// update user
export const updateUserInfo = async (Token, userForm) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${Token}`
};
const data = {
  userName: userForm,
}
try {
    const response = await axios.put(`${API_URL}/user/profile`, data, {headers});
  return response;
} catch (error) {
  throw error;
}
}