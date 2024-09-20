const express = require("express");
const { connectDb } = require("./config/db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
connectDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/flights", require("./routes/flightRoute"));
app.use("/auth", require("./routes/authRoute"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
