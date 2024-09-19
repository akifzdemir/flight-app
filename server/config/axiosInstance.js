const axios = require("axios");

const baseURL = "https://api.schiphol.nl/public-flights";

const instance = axios.create({
  baseURL,
});

const app_id = "b107db3f";
const app_key = "ea3699f89efddb746745e04b684e9d68";

instance.interceptors.request.use((config) => {
  config.headers.app_id = app_id;
  config.headers.app_key = app_key;
  config.headers.resourceversion = "v4";

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorResponse = error.response?.data;

    return Promise.reject(errorResponse || error);
  }
);

const fetcher = (url) => instance.get(url).then((res) => res.data);

module.exports = { instance, fetcher };
