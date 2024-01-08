const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const THERAPY = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  
  description: { type: String, require: true },
  education: { type: String, require: true },
  specialization:{ type: String, require: true },
  image: { type: String, require: true },
});

const therapy = model("therapy", THERAPY);
module.exports = therapy;
