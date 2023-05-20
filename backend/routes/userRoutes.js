const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/register", async (req, res) => {
  const { userName, email, password, confirmPassword } = req.body;
  if (!userName || !email || !password || !confirmPassword) {
    return res
      .status(400)
      .json({ error: "Please enter all credentials!", status: "error" });
  }

  const doesUserExist = await User.findOne({ email: email });

  if (doesUserExist) {
    return res
      .status(400)
      .json({ error: "Account already exists!", status: "error" });
  }

  const user = await User.create({
    userName,
    email,
    password,
    confirmPassword,
  });

  res.status(200).json({ status: "ok" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Please enter all credentials!", status: "error" });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res
      .status(400)
      .json({ error: "Account does not exist!", status: "error" });
  }

  if (user.password !== password) {
    return res.status(400).json({ error: "Wrong password!", status: "error" });
  }

  res.status(200).json({ data: user, status: "ok" });
});

module.exports = router;
