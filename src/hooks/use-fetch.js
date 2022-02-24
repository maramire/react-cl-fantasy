import { useState, useCallback } from "react";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const useFetch = () => {
  const [serverError, setServerError] = useState(null);

  const fetchData = useCallback(async (path, options) => {
    try {
      const url = API_BASE_URL + path;
      console.log("Fetching " + url);
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("The data can't be fetched in this moment.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return new Error("The data can't be fetched in this moment.");
    }
  }, []);

  const genOptionsFor = (method, token, withBody = null) => {
    const options = {};
    options.headers = {
      "Content-Type": "application/json",
    };
    options.method = method;
    if (withBody) options.body = JSON.stringify(withBody);
    if (token) options.headers.Authorization = "Bearer " + token;
    return options;
  };

  const getDataFromServer = useCallback(
    async (path, token = null) => {
      setServerError(null);
      const options = genOptionsFor("GET", token);
      try {
        return await fetchData(path, options);
      } catch (error) {
        setServerError(error);
      }
    },
    [fetchData]
  );

  const postDataToServer = useCallback(
    async (path, token = null, body) => {
      setServerError(null);
      const options = genOptionsFor("POST", token, body);
      try {
        return await fetchData(path, options);
      } catch (error) {
        setServerError(error);
      }
    },
    [fetchData]
  );

  return { getDataFromServer, postDataToServer, serverError };
};

export { useFetch };
