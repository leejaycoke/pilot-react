import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
});

const token = window.sessionStorage.getItem("userToken");

apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;

export default apiClient;
