mongoose = require("mongoose");

const admin = new mongoose.Schema({
  Name: {
    type: "String",
  },
  email: {
    type: "String",
    unique: true,
  },
  password: {
    type: "String",
    required: true,
  },
  contact: {
    type: "Number",
    required: true,
  },
});

admins = mongoose.model("Admin", admin);

module.exports = admins;
