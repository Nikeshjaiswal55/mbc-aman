// apiService.js
import apiClient from "./apiClient";

export const fetchData = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return { data: response.data, isLoading: false, isError: false, isSuccess: true };
  } catch (error) {
    console.error("Fetch Error:", error);
    return { data: null, isLoading: false, isError: true, isSuccess: false, error };
  }
};

export const postData = async (endpoint, payload) => {
  try {
    const response = await apiClient.post(endpoint, payload);
    return { data: response.data, isLoading: false, isError: false, isSuccess: true };
  } catch (error) {
    console.error("Post Error:", error);
    return { data: null, isLoading: false, isError: true, isSuccess: false, error };
  }
};
