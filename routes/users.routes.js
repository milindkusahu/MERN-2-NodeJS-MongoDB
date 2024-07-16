const router = require("express").Router();
const {
  getUsers,
  getUserByUUID,
  searchUsers,
} = require("../controllers/users.controller");

const validateSearchQuery = require("../middlewares/validateUserSearchQuery");

router.get("/", getUsers);
router.get("/search", validateSearchQuery, searchUsers);
router.get("/:uuid", getUserByUUID);

module.exports = router;
