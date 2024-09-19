const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
  console.log("successfully connected to db");
});

const connectDb = async () => {
  await Mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectDb,
};
