const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const userValidation = require("../validations/userValidation");
const validate = require("../middleware/zodMiddleWare");
router.post("/user/signup", validate(userValidation), userController.signup);
router.post("/user/login", userController.login);
router.get("/user", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUserById);

module.exports = router;
