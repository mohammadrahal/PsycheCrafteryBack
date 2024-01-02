const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const THERAPY = new Schema ({
fullName:{
    type:String,
    require:true
}

})

const therapy = model("therapy", THERAPY);
module.exports = therapy;