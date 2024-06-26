const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Blog = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const blog = model("blog", Blog);

module.exports = blog;
