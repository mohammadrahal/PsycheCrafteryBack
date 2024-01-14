const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const FEEDBACK = new Schema ({
    fillName: { type: String, required: true},
    message: { type: String, require: true },
    description:{type: String, require: true},
    approve: { type: Boolean, default: false },
})

const feedback = model("feedback", FEEDBACK);
module.exports = feedback;