mongoose = require("mongoose");

const project = new mongoose.Schema({
  email: {
    type: "String",
  },
  name: {
    type: "String",
  },
  description: {
    type: "String",
  },
  tags: {
    type: "String",
  },
  image: {
    type: "String",
  },
  source_code_link: {
    type: "String",
  },
});

projects = mongoose.model("projects", project);

module.exports = projects;
