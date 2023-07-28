const express = require("express");

const {
  home,
  createUser,
  getUser,
  deleteUser,
  editUser,
} = require("../controllers/userController");
const router = express.Router();
router.get("/", home);
router.post("/createuser", createUser);
router.get("/getUser", getUser);
router.delete("/deleteuser/:id", deleteUser);
router.put("/edituser/:id", editUser);
module.exports = router;
