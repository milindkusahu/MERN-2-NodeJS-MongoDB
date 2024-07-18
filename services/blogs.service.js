const Blogs = require("../models/blogs.model");

class BlogService {
  find = async () => {
    return await Blogs.find({});
  };

  create = async (data) => {
    const blogDocument = new Blogs(data);
    return await blogDocument.save();
  };
}

// const findAllBlogs = async () => {
//   return await Blogs.find({});
// };

// const createBlogDocument = async (data) => {
//   const blogDocument = new Blogs(data);
//   return await blogDocument.save();
// };

module.exports = BlogService;
