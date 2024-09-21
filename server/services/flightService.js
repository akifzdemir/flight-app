const { instance: axios } = require("../config/axiosInstance");
const Flight = require("../models/Flight");

const list = async () => {
  const res = await axios.get("/flights");
  return res.data;
};

const add = async (flight) => {
  const res = await Flight.create(flight);
  return res;
};

const remove = async (id) => {
  const res = await Flight.findByIdAndDelete(id);
  return res;
};

module.exports = { list, add, remove };
