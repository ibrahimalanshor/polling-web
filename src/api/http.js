import axios from 'axios';

export default () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  return instance;
};
