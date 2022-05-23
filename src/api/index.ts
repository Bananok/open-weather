import axios from "axios";

const BASE_URL = "api.openweathermap.org";

export const api = axios.create({
  baseURL: BASE_URL,
});
