mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
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
  },
});

users = mongoose.model("User", user);

module.exports = users;
