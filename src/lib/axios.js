import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5001/api"
      : "https://chatya-backend.onrender.com/api",
  withCredentials: true,
});