import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

const baseURL = "http://localhost:3000";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const errorResponse = error.response?.data;

    toast.error(
      errorResponse &&
        typeof errorResponse === "object" &&
        "error" in errorResponse &&
        typeof errorResponse.error === "string"
        ? errorResponse.error
        : "Something went wrong"
    );

    return Promise.reject(errorResponse || error);
  }
);

const fetcher = (url: string) => instance.get(url).then((res) => res.data);

const defaultFetcher = (url: string) => axios.get(url).then((res) => res.data);

export { instance, fetcher, defaultFetcher };
