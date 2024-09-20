import { instance as axios } from "./axiosInstance";

const login = (data: { email: string; password: string }) =>
  axios.post("/auth/login", data);

const register = (data: { email: string; password: string; name: string }) =>
  axios.post("/auth/register", data);

export { login, register };
