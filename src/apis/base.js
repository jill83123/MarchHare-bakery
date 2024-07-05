import axios from 'axios';

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
const baseURL = `${VITE_APP_API}/v2/api/${VITE_APP_PATH}`;

export const axiosInstance = axios.create({
  baseURL,
});

export const adminAxiosInstance = axios.create({
  baseURL: `${baseURL}/admin`,
});

adminAxiosInstance.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)MarchHareToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
  (error) => Promise.reject(error),
);
