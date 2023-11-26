import axios from "axios";
import localforage from "localforage";

const instance = axios.create({
  baseURL: "http://localhost:5001/api",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await localforage.getItem("token");
    if (token) {
      config.headers.Authorization = token as string; // Assuming token is a string
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
