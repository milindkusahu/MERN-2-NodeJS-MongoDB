const {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogWithId,
  searchBlogs,
} = require("../controllers/blogs.controller");

const router = require("express").Router();

router.get("/", getAllBlogs);
router.get("/search", searchBlogs);
router.post("/new", createNewBlog);
router.patch("/:id", updateBlogWithId);
router.delete("/:id", deleteBlogWithId);

module.exports = router;
