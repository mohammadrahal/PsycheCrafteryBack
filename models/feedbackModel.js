const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const FEEDBACK = new Schema ({

})

const feedback = model("feedback", FEEDBACK);
module.exports = feedback;