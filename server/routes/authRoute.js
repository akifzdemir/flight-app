const router = require("express").Router();
const { model } = require("mongoose");
const { login, register } = require("../controllers/authController");

router.post("/login", login);
router.post("/register", register);

module.exports = router;
