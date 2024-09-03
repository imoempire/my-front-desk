import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { BASE_ENDPOINT } from "./endpoints";
import authServices from "../Services/auth.services";

const http = axios.create({
  baseURL: BASE_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  async (config) => {
    const token = await authServices.getToken();
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response && error.response.status === 401) {
      await authServices.signOut();
    }
    return Promise.reject(error);
  }
);

export default http;
