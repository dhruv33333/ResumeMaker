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

  res.status(200).json({ user, status: "ok" });
});

router.post("/login", (req, res) => {});

module.exports = router;
