import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5001/api"
      : "https://chatya-backend.vercel.app/api",
  withCredentials: true,
});