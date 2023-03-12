mongoose = require("mongoose");

const single_title = new mongoose.Schema({
  title: {
    type: "String",
  },
  icon: {
    type: "String",
  },
});

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
  more_titles: [single_title],
});

userProfiles = mongoose.model("userProfile", userProfile);

module.exports = userProfiles;
