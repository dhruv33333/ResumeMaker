const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { userName, email, password, confirmPassword } = req.body;
  if (!userName || !email || !password || !confirmPassword) {
    res
      .status(400)
      .json({ error: "Please enter all credentials", status: "error" });
  }

  res
    .status(200)
    .json({ userName, email, password, confirmPassword, status: "ok" });
});

router.post("/login", (req, res) => {});

module.exports = router;
