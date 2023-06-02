import axios from 'axios';
import { TokenStorage } from '@/utils';

export const TOKEN_KEY = 'token';
export const ROLE_KEY = 'guid';

const tokenStorage = new TokenStorage(TOKEN_KEY);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error?.response?.status) {
      case 401:
        tokenStorage.removeToken();
        window.location.href = '/login';
        break;
      case 403:
        window.location.href = '/';
        break;
    }
    return Promise.reject(error.response);
  },
);

if (tokenStorage.getToken()) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage.getToken()}`;
} else {
  delete axios.defaults.headers.common['Authorization'];
}
