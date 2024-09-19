const { list } = require("../services/flightService");

const getFlights = async (req, res) => {
  try {
    const flights = await list();
    res.json(flights);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getFlights,
};
