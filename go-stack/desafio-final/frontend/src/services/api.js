import axios from 'axios';

console.log(
    'Configurando api com: ',
    process.env.REACT_APP_API_HOST,
    ':',
    process.env.REACT_APP_API_PORT
);
const api = axios.create({
    baseURL: `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`,
});

export default api;
