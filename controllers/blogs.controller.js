const Blogs = require("../models/blogs.model");

// Create
const createNewBlog = async (req, res) => {
  try {
    // Prepare
    const blogDocument = new Blogs(req.body);

    // Send to database
    await blogDocument.save();

    res.json(blogDocument);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
const updateBlogWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      _id: id,
    };
    const update = req.body;
    const options = { new: true };

    const result = await Blogs.findOneAndUpdate(filter, update, options);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
const deleteBlogWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Blogs.findOneAndDelete({ _id: id });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createNewBlog,
  getAllBlogs,
  updateBlogWithId,
  deleteBlogWithId,
};
