const { instance: axios } = require("../config/axiosInstance");

/**
 * Get all flights
 * @returns {Promise<{flights: any}>}
 */
const list = async () => {
  const res = await axios.get(
    "/flights?searchDateTimeField=expectedTimeBoarding&includedelays=false"
  );
  return res.data;
};

module.exports = { list };
