const { instance: axios } = require("../config/axiosInstance");
const Flight = require("../models/Flight");

const list = async () => {
  const res = await axios.get(
    "/flights?searchDateTimeField=expectedTimeBoarding&includedelays=false"
  );
  return res.data;
};

const add = async (flight) => {
  const res = await Flight.create(flight);
  return res;
};

module.exports = { list };
