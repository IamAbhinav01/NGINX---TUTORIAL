import axios from "axios";

const configuredBaseUrl = process.env.REACT_APP_API_URL || "http://localhost:3001";
const baseUrl =
  window.location.port === "3000" && configuredBaseUrl === "/api"
    ? "http://localhost:3001"
    : configuredBaseUrl;

const api = {
  get: (endpoint) => axios.get(baseUrl + endpoint),
    post: (endpoint, data) => axios.post(baseUrl + endpoint, data),
  delete: (endpoint) => axios.delete(baseUrl + endpoint),
};

export default api;
