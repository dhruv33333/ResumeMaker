const express = require("express");
const app = express();
require("dotenv").config(); // setup dot env

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ data: "data" });
});

app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});
