const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const FAQ = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const faq = model("faq", FAQ);

module.exports = faq;
