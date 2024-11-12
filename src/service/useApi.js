// useApi.js
import { useState } from "react";
import * as apiService from "./apiService";

export const useApi = (apiFunction) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async (...params) => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    const response = await apiFunction(...params);
    setIsLoading(false);

    if (response.isError) {
      setIsError(true);
      setError(response.error);
    } else {
      setIsSuccess(true);
      setData(response.data);
    }
  };

  return { data, isLoading, isError, isSuccess, error, callApi };
};
