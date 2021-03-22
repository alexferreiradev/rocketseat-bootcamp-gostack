import axios from 'axios';

const api = axios.create({
  baseURL: 'http://teste-go-barber.herokuapp.com',
});

export default api;
