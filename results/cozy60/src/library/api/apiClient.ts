import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
});

const token = window.sessionStorage.getItem('accessToken');

apiClient.defaults.headers['Access-Control-Allow-Origin'] =
  'http://localhost:5000';
apiClient.defaults.headers['Access-Control-Allow-Credentials'] = 'true';
apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;

export default apiClient;
