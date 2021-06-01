const router = require("express").Router();
const User = require("../models/User");
const SecretCode = require("../models/SecretCode");

router.get("/:username", async (req, res) => {
  //
  User.findOne(
    {
      username: req.params.username,
    },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.sendStatus(200);
    }
  );
});

module.exports = router;
