const { list, add, remove } = require("../services/flightService");

const getFlights = async (req, res) => {
  try {
    const flights = await list();
    res.json(flights);
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
    res.status(500).json({ error: error });
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
};
