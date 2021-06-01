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

      if (!result) {
        res.status(418).send("No User");
      } else {
        user = result;
        if (user.status === "pending") {
          SecretCode.findOne({ email: user.email }, (error, code) => {
            if (error) {
              console.log(error);
              res.send("Problem at Find-existed code");
            }
            // Delete the Created Code
            if (code) {
              try {
                SecretCode.findOneAndDelete({ email: code.email }, (error) => {
                  if (error) {
                    console.log(error);
                  }
                });
              } catch (error) {
                console.log(error.message);
              }
            }
          });

          // Create the new code
          let code = genCode(5);
          const secretCode = new SecretCode({
            email: user.email,
            code: code,
          });
          try {
            await secretCode.save();
            console.log(secretCode);
            sendMail(user.email, code, () => res.sendStatus(200));
          } catch (error) {
            console.log(error);
          }
        } else {
          res.send("User Already Registered");
        }
      }
    }
  );

  console.log(user);
});

router.post("/verify", (req, res) => {
  const { email, code } = req.body;
  SecretCode.findOne({ email: email }, (error, secretCode) => {
    if (error) {
      console.log(error);
      res.status(418).send("DB Error Occured");
    }
    if (!secretCode) {
      res.status(418).send("No User Has This Email");
    }

    // Check The Code
    if (code === secretCode.code) {
      User.updateOne({ email: email }, { status: "verified" }, (error) => {
        if (error) {
          console.log(error);
          res.send("error when update");
        }
        res.status(200).send("Verified");
      });
    }
  });
});

module.exports = router;
