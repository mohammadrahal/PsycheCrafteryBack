const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const THERAPY = new Schema ({
    name: {
        type: String,
        required: true
      },

})

const therapy = model("therapy", THERAPY);
module.exports = therapy;