import axios from 'axios';
import Config from 'react-native-config';
import tokenHandler from '../tokenHandler';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {},
});

instance.interceptors.request.use(
  async (config) => {
    const accessToken = await tokenHandler.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    config.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    config.headers.Accept = 'application/json';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
