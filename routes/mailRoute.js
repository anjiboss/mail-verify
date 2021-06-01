const router = require("express").Router();
const User = require("../models/User");
const SecretCode = require("../models/SecretCode");
const genCode = require("../utils/CodeGenerator");
const sendMail = require("../utils/sendMail");

router.get("/:username", async (req, res) => {
  //
  let user = "";
  await User.findOne(
    {
      username: req.params.username,
    },
    async (err, result) => {
      if (err) {
        console.log(err);
      }

      user = result;
      if (user.status === "pending") {
        let code = genCode(5);
        const secretCode = new SecretCode({
          email: user.email,
          code: code,
        });
        try {
          await secretCode.save();
          console.log(secretCode);
          sendMail(user.email, code, () => console.log("done"));
        } catch (error) {
          console.log(error);
        }
      }
      res.sendStatus(200);
    }
  );

  console.log(user);
});

module.exports = router;
