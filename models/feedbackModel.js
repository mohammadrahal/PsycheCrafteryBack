const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const FEEDBACK = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  description: { type: String, required: true },
  approve: { type: Boolean, default: false },
});

const feedback = model("feedback", FEEDBACK);
module.exports = feedback;
