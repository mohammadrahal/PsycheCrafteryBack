const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const QUESTIONS = new Schema({
    questions: { type: String, required: true },
    answers: { type: String, required: true },
    category: [{ type: String }]
})


const question = model('question', QUESTIONS)
module.exports = question