const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const USER = new Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "therapy"],
    default: "user",
  },
});

const user = model("user", USER);
module.exports = user;
