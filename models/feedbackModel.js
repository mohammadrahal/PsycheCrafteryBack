const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const FEEDBACK = new Schema ({
    name: { type: String, required: true},
    description: { type: String, require: true },
    address: { type: String, require: true },
})

const feedback = model("feedback", FEEDBACK);
module.exports = feedback;