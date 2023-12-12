import axios from 'axios';
const { REACT_APP_URL_API } = process.env;
const urlApi: string = REACT_APP_URL_API as string;

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error) => await Promise.reject(error)
);

axiosInstance.defaults.baseURL = process.env.REACT_APP_URL_API;

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken') as string;
        const response = await axios.post<{
          access_token: string;
          refresh_token: string;
        }>(
          `${urlApi}/auth/refresh`,
          {},
          { headers: { Authorization: `Bearer ${refreshToken}` } }
        );

        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('refreshToken', response.data.refresh_token);

        // Retry the original request with the new access_token
        originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
        return await axios(originalRequest);
      } catch (error) {
        // Handle refresh token error or redirect to login
        localStorage.clear();
        window.location.assign('/login');
      }
    }

    return await Promise.reject(error);
  }
);

export default axiosInstance;
