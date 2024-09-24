const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
const flightController = require("../controllers/flightController");

router
  .route("/")
  .get(flightController.getFlights)
  .post(authMiddleware, flightController.addFlight);

router.route("/destinations").get(flightController.getDestinations);

router.route("/:id").delete(authMiddleware, flightController.removeFlight);

router.route("/user").get(authMiddleware, flightController.getFlightsByUser);

module.exports = router;
