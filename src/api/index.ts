import axios from "axios";

export const BASE_URL = "http://api.openweathermap.org/";
export const API_KEY = "881c7d3110082855f058fdd78dce059d";

export const api = axios.create({
  baseURL: BASE_URL,
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response.data);
  }
);
