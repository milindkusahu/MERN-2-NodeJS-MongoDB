const {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogWithId,
} = require("../controllers/blogs.controller");

const router = require("express").Router();

router.get("/", getAllBlogs);
router.post("/new", createNewBlog);
router.patch("/:id", updateBlogWithId);
router.delete("/:id", deleteBlogWithId);

module.exports = router;
