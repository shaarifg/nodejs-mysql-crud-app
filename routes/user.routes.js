const {
  register,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = require("express").Router();

// CRUD ROUTES
router.post("/user", register);
router.get("/user", getAllUsers);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
