const express = require("express");
const app = express();
const PORT = process.env.PORT || 2800;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
