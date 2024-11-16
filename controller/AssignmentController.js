const assignmentmodel = require("../model/AssignmentModel");
// const statusModel = require("../model/StatusModel");
// const userModel = require("../model/UserModel");
exports.creatAssignment = async (req, res) => {
  const assignment = new assignmentmodel(req.body);
  console.log("request Body", req.body);
  await assignment
    .save()
    .then((data) => {
      if (!data || data == undefined) {
        res.json({
          status: 400,
          message: "Assignment not created",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          message: "Assignment created successfully",
          data: data,
        });
      }
    })
    .catch((error) => {
      if (error) {
        res.json({
          status: 500,
          message: "Internal Server Error",
          data: error,
        });
      }
    });
};
exports.getAllAssignments = async (req, res) => {
  await assignmentmodel
    .find()
    .then((data) => {
      if (!data || data == undefined) {
        res.json({
          status: 400,
          message: "No Assignments Found",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          message: "All Assignments",
          data: data,
        });
      }
    })
    .catch((error) => {
      if (error) {
        res.json({
          status: 500,
          message: "Internal Server Error",
          data: error,
        });
      }
    });
};
exports.getAssignmentById = async (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  await assignmentmodel
    .findById({ _id: id })
    .then((data) => {
      if (!data || data == undefined) {
        res.json({
          status: 400,
          message: "Assignment Not Found",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          message: "Assignment Retrieved Successfully",
          data: data,
        });
      }
    })
    .catch((error) => {
      if (error) {
        res.json({
          status: 500,
          message: "Internal Server Error",
          data: error,
        });
      }
    });
};
exports.updateAssignment = async (req, res) => {
  const id = req.params.id;
  await assignmentmodel
    .findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((data) => {
      if (!data || data == undefined) {
        res.json({
          status: 400,
          message: "Assignment Not Found",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          message: "Assignment Updated Successfully",
          data: data,
        });
      }
    })
    .catch((error) => {
      if (error) {
        res.json({
          status: 500,
          message: "Internal Server Error",
          data: error,
        });
      }
    });
};
// change status of assignment
