mongoose = require("mongoose");

const userProfile = new mongoose.Schema({
  name: {
    type: "String",
  },
  email: {
    type: "String",
    unique: true,
  },
  title: {
    type: "String",
  },
  description: {
    type: "String",
  },
  overview: {
    type: "String",
  },
  more_titles: {
    type: "String",
  },
});

userProfiles = mongoose.model("userProfile", userProfile);

module.exports = userProfiles;
