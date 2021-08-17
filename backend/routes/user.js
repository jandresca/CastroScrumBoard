const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const Auth = require("../middleware/auth");
const validateUser = require("../middleware/validateUser");

router.post("/registerUser", userController.registerUser);
// http://localhost:3001/api/user/listUser
router.get("/listUser/:name?", Auth, validateUser, userController.listUser);

module.exports = router;
