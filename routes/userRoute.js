const router = require("express").Router();
const User = require("../models/User");

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  User.find(
    { $or: [{ username: username }, { email: email }] },
    async (error, checkUser) => {
      if (error) {
        console.log(error);
        res.status(418).send("Error Ouccer: Find If User Existed");
      }
      console.log("checkUser: ", checkUser);
      if (checkUser.toString() !== "") {
        res.send("User Already Existed");
      } else {
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
      }
    }
  );
});

module.exports = router;
