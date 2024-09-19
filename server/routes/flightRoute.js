const express = require("express");

const router = express.Router();
const flightController = require("../controllers/flightController");

router.route("/").get(flightController.getFlights);

module.exports = router;
