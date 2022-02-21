import { useState, useCallback } from "react";

/*
    useFetch receives a method (GET, POST, etc), a url to fetch content and optional body.
*/
const useFetch = () => {
  const [serverError, setServerError] = useState(null);

  const fetchData = useCallback(async (url, options) => {
    try {
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

  const genOptionsFor = (method, body = null) => {
    const options = {};
    options.headers = { "Content-Type": "application/json" };
    options.method = method;
    options.body = JSON.stringify(body);
    return options;
  };

  const getData = async (url) => {
    setServerError(null);
    const options = genOptionsFor("GET");
    try {
      return await fetchData(url, options);
    } catch (error) {
      setServerError(error);
      return serverError;
    }
  };
  const postData = async (url, body) => {
    setServerError(null);
    const options = genOptionsFor("POST", body);
    console.log(options);
    try {
      return await fetchData(url, options);
    } catch (error) {
      setServerError(error);
      return serverError;
    }
  };

  return { getData, postData };
};

export default useFetch;
