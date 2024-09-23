const { list, add, remove, getByUser } = require("../services/flightService");

const getFlights = async (req, res) => {
  try {
    const params = req.query;
    const flights = await list(params);
    res.json(flights);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getFlightsByUser = async (req, res) => {
  try {
    const userId = req.user;
    const flights = await getByUser(userId);
    res.json({ flights: flights });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addFlight = async (req, res) => {
  try {
    const flight = req.body;
    const userId = req.user;
    const newFlight = await add({ ...flight, userId });
    res.json(newFlight);
  } catch (error) {
    res.status(500).json({ error: error.message || "An error occurred" });
  }
};

const removeFlight = async (req, res) => {
  try {
    const { id } = req.params;
    const flight = await remove(id);
    res.json(flight);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getFlights,
  addFlight,
  removeFlight,
  getFlightsByUser,
};
