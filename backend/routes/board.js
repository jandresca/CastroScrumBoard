const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/board");
const Auth = require("../middleware/auth");
const validateUser = require("../middleware/validateUser");

router.post("/saveTask", Auth, validateUser, BoardController.saveTask);

module.exports = router;