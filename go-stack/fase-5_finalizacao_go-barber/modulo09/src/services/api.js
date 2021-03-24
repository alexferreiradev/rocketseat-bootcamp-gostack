import axios from 'axios';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();
const api = axios.create({
  baseURL: env.REACT_APP_API_URL,
});

export default api;
