const express = require("express");
const app = express();
require("dotenv").config(); // setup dot env
const connectDB = require("./config/connectDB");
connectDB();

// import routes
const userRouter = require("./routes/userRoutes");

const PORT = process.env.PORT;

app.use(express.json()); // this is for the server to understand JSON

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});
