import axios from 'axios';

const apiClient = axios.create({
  withCredentials: true,
});

apiClient.defaults.baseURL = 'http://localhost:5000';

export default apiClient;
