const express = require("express");
const app = express();
const PORT = process.env.PORT || 2800;
require("dotenv").config();
const connectToMongoDb = require("./utils/dbConfig");
const { personRoute } = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", personRoute);


app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
  connectToMongoDb();
});
