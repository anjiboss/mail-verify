const router = require("express").Router();

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;
});

module.exports = router;
