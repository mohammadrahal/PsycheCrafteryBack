const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const FEEDBACK = new Schema ({
    name: { type: String, required: true},
    message: { type: String, require: true },
})

const feedback = model("feedback", FEEDBACK);
module.exports = feedback;