const mongoose = require("mongoose");

// Old Way to Define Schema
// const blogSchema = new mongoose.Schema({
//   title: String,
//   authors: [String],
//   content: String,
//   publishedAt: Date,
// });

// New Way to Define Schema
const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    authors: { type: [String] },
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel;
