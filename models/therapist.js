const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const THERAPY = new Schema({
  fullName: { type: String, required: true},
  description: { type: String, require: true },
  education: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  specialization:{ type: String, require: true },
  phone: { type: String, require: true },
  address: { type: String, require: true },
  image: { type: String, require: true },
});

const therapy = model("therapy", THERAPY);
module.exports = therapy;
