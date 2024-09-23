const { instance: axios } = require("../config/axiosInstance");
const Flight = require("../models/Flight");

const list = async () => {
  const res = await axios.get("/flights");
  return res.data;
};

const getByUser = async (id) => {
  console.log(id);
  const res = await Flight.find({ userId: id });
  return res;
};

const add = async (flight) => {
  const existFlight = await Flight.findOne({
    userId: flight.userId,
    flightNumber: flight.flightNumber,
  });

  if (existFlight) {
    throw new Error("Flight already exists");
  }
  const res = await Flight.create(flight);
  return res;
};

const remove = async (id) => {
  const res = await Flight.findByIdAndDelete(id);
  return res;
};

module.exports = { list, add, remove, getByUser };
