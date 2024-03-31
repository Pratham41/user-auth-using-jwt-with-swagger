const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection;

connection.on("error", (err) => {
  console.log(err);
  process.exit(1);
});

connection.on("connected", () =>
  console.log("Mongo DB Connection Successfull")
);