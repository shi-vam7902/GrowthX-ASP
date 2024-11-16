const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");
const AdminValidation = require("../validations/adminValidation");
const validate = require("../middleware/zodMiddleWare");

router.post(
  "/api/register",
  validate(AdminValidation),
  adminController.createAdmin
);
router.post("/api/login", adminController.loginAdmin);
router.get("/api/admin", adminController.getAllAdmins);
router.get("/api/admin/:id", adminController.getAdminById);
router.put(
  "/api/admin/:id",
  validate(AdminValidation),
  adminController.updateAdminById
);
router.put(
  "/api/admin",
  validate(AdminValidation),
  adminController.updateAdmin
);

module.exports = router;
