const express = require("express");
const router = express.Router();
const User = require("../models/UserModel"); // Your user model

// Add a new user
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

module.exports = router;
