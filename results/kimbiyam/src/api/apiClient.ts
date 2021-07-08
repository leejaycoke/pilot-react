import axios from "axios";
import { SERVER_URL, TOKEN_PREFIX } from "../constants/constants";
import tokenStorage from "../utils/tokenStorage";

const apiClient = axios.create({ baseURL: SERVER_URL });

apiClient.interceptors.request.use((config) => {
  const accessToken = tokenStorage.getToken();

  config.headers.Authorization = `${TOKEN_PREFIX} ${accessToken}` || "";

  return config;
});

export default apiClient;
