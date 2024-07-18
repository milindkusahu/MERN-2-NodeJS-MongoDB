const Blogs = require("../models/blogs.model");
const BlogService = require("../services/blogs.service");
const BlogServiceInstancce = new BlogService();

// Create
const createNewBlog = async (req, res) => {
  try {
    const blog = await BlogServiceInstancce.create(req.body);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogServiceInstancce.find();
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

const searchBlogs = async (req, res) => {
  const { title: inputTitle, email: inputEmail } = req.query;
  // const {a: y} = x;
  // const y = x.a;

  // Ask MongoDB for blogs with this title and author
  const data = await Blogs.find({
    $or: [
      { title: inputTitle },
      {
        authors: {
          $elemMatch: {
            email: inputEmail,
          },
        },
      },
    ],
  });

  /* title: inputTitle, // We can also simply use "title" instead on "title: inputTitle"
    authors: {
      $elemMatch: {
        // Like .includes()
        email: inputEmail,
      },
    },
  }); */

  res.json(data);
};

module.exports = {
  createNewBlog,
  getAllBlogs,
  updateBlogWithId,
  deleteBlogWithId,
  searchBlogs,
};
