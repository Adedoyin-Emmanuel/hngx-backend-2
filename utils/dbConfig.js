const mongoose = require("mongoose");

const connectToMongoDb = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to MongoDb");
    })
    .catch((error) => {
      console.log(`An error occured while connecting to Mongodb ${error}`);
    });
};

module.exports = connectToMongoDb;
