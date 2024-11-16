const express = require("express");
const router = express.Router();
const assignmentController = require("../controller/AssignmentController");
const assignmentValidation = require("../validations/assignmentsValidations");
const validate = require("../middleware/zodMiddleWare");

router.post(
  "/assignment",
  validate(assignmentValidation),
  assignmentController.creatAssignment
);
router.get("/assignment", assignmentController.getAllAssignments);
router.get("/assignment/:id", assignmentController.getAssignmentById);
router.get("/assignment/:id", assignmentController.updateAssignment);
module.exports = router;
