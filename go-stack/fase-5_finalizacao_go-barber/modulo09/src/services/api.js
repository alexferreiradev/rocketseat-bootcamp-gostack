import axios from 'axios';

const api = axios.create({
  baseURL: 'https://teste-go-barber.herokuapp.com',
});

export default api;
