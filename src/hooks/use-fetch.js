import { useState, useCallback } from "react";

/*
    useFetch receives a method (GET, POST, etc), a url to fetch content and optional body.
*/
const useFetch = () => {
  const [serverError, setServerError] = useState(null);

  const fetchData = useCallback(async (url, options) => {
    try {
      console.log(url, options);
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

  const getData = useCallback(
    async (url, token = null) => {
      setServerError(null);
      const options = genOptionsFor("GET", token);
      try {
        return await fetchData(url, options);
      } catch (error) {
        setServerError(error);
      }
    },
    [fetchData]
  );

  const postData = useCallback(
    async (url, token = null, body) => {
      setServerError(null);
      const options = genOptionsFor("POST", token, body);
      console.log(options);
      try {
        return await fetchData(url, options);
      } catch (error) {
        setServerError(error);
      }
    },
    [fetchData]
  );

  return { getData, postData, serverError };
};

export default useFetch;
