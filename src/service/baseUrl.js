import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

Api.interceptors.request.use(async (config) => {
  return config;
});

export { Api };
