// apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://script.viserlab.com/playlab/demo", // replace with your base URL
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle API response errors globally
    return Promise.reject(error.response ? error.response.data : error);
  }
);

export default apiClient;
