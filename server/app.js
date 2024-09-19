const express = require("express");
const { connectDb } = require("./config/db");

const app = express();

// connectDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/flights", require("./routes/flightRoute"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
