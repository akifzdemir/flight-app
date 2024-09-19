const { instance } = require("../config/axiosInstance");

const list = async () => {
  const flights = await instance.get("/flights");
  return { flights: flights.data };
};

module.exports = { list };
