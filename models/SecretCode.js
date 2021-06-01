const mongoose = require("mongoose");

const SecretCode = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  code: {
    type: String,
    required: true,
  },

  dateCreated: {
    type: Date,
    default: Date.now(),
    expires: 600,
  },
});

const secretCode = mongoose.model("SecretCode", SecretCode);

module.exports = secretCode;
