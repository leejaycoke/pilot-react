import axios from "axios";
import { SERVER_URL } from "../constants/constants";
import tokenStorage from "../utils/tokenStorage";

const apiClient = axios.create({ baseURL: SERVER_URL });

apiClient.interceptors.request.use((config) => {
  const accessToken = tokenStorage.getToken();

  config.headers.Authorization = accessToken || "";

  return config;
});

export default apiClient;
