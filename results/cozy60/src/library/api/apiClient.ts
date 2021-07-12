import axios from 'axios';

const apiClient = axios.create({
  withCredentials: true,
});

apiClient.defaults.baseURL = 'http://localhost:5050';

export default apiClient;
