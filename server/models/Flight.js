const mongoose = require("mongoose");
const { Schema } = mongoose;

const flightSchema = new Schema({
  lastUpdatedAt: { type: Date },
  actualLandingTime: { type: Date },
  aircraftType: {
    iataMain: { type: String },
    iataSub: { type: String },
  },
  baggageClaim: {
    belts: { type: [String] },
  },
  codeshares: {
    codeshares: { type: [String] },
  },
  estimatedLandingTime: { type: Date },
  expectedTimeOnBelt: { type: Date },
  flightDirection: { type: String },
  flightName: { type: String },
  flightNumber: { type: Number },
  isOperationalFlight: { type: Boolean },
  mainFlight: { type: String },
  prefixIATA: { type: String },
  prefixICAO: { type: String },
  airlineCode: { type: Number },
  publicFlightState: {
    flightStates: { type: [String] },
  },
  route: {
    destinations: { type: [String] },
    eu: { type: String },
    visa: { type: Boolean },
  },
  scheduleDateTime: { type: Date },
  scheduleDate: { type: String },
  scheduleTime: { type: String },
  serviceType: { type: String },
  terminal: { type: Number },
  schemaVersion: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
