const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

const Project = mongoose.model("users", projectSchema);

module.exports = Project;
  