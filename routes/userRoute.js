const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({
    username,
    email,
    password,
  });
  try {
    await user.save();
    console.log(user);
    res.sendStatus(200);
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
});

module.exports = router;
