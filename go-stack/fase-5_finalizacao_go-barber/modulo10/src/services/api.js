import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.13:3333', // ID do DEV
});

export default api;
