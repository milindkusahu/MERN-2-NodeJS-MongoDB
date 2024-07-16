const mongoose = require("mongoose");
const validator = require("validator");

const validateIfValueIsURL = (value) => validator.isURL(value);

const authorSchema = new mongoose.Schema(
  {
    fullName: { type: String, maxLength: 25 },
    twitterHandle: { type: String },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      validate: (value) => validator.isEmail(value),
    },
    image: {
      type: String,
      validate: validateIfValueIsURL /* (value) => {
        const isValidURL = validator.isURL(value);
        if (isValidURL) return true;
        return false; */,
    },
  },
  {
    _id: false, // Removes unnecessary _id from the author object
  }
);

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    // authors: { type: [String] },
    authors: { type: [authorSchema] },
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel;
