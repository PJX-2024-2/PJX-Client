import axios from 'axios';

export const getAccessTokenLocalStorage = () => {
    const accessToken = localStorage.getItem('EXIT_ACCESS_TOKEN');
    return accessToken ? `${accessToken}` : '';
};

export const getRefreshTokenLocalStorage = () => {
    const refreshToken = localStorage.getItem('EXIT_REFRESH_TOKEN');
    return refreshToken ? `${refreshToken}` : '';
  };

export const checkCurrentMode = () => {
    const currentMode = import.meta.env.PROD ? 'production' : 'development';
    return currentMode;
  };

  /*이 authInstance는 추후 로그인 작업에서 필요할 경우 사용하세요! header 에 어떤 값을 넘겨줘야하는지 명세서 확인하고 수정하기!*/
  export const authInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
    withCredentials: true,
    headers: {},
  });

export const serverInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${getAccessTokenLocalStorage()}`,
    },
  });

  export const aiInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_AI_BASE_URL,
    withCredentials: true,
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  })