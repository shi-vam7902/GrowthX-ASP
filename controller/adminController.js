const adminModel = require("../model/adminModel");
const assignmentmodel = require("../model/AssignmentModel");
exports.createAdmin = async (req, res) => {
  const admin = new adminModel(req.body);
  console.log("request Body", req.body);
  await admin
    .save()
    .then((data) => {
      if (!data || data == undefined) {
        res.json({
          status: 400,
          message: "Admin not created",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          message: "Admin created successfully",
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
exports.loginAdmin = async (req, res) => {
  console.log("reqBody", req.body);
  await adminModel
    .find({ email: req.body.email, password: req.body.password })
    .then((data) => {
      if (!data || data == undefined) {
        res.json({
          status: 400,
          message: "Invalid Email or Password",
          data: data,
        });
        console.log("data", data);
      } else {
        res.json({
          status: 200,
          message: "Admin logged in successfully",
          data: data,
        });
      }
    })
    .catch((error) => {
      res.json({
        status: 500,
        message: "Error Logging For Admin",
        data: error,
      });
    });
};
exports.getAllAdmins = async (req, res) => {
  await adminModel
    .find()
    .then((data) => {
      if (!data || data == undefined) {
        res.json({
          status: 400,
          message: "No Admins Found",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          message: "All Admins Retrieved Successfully",
          data: data,
        });
      }
    })
    .catch((error) => {
      res.json({
        status: 500,
        message: "Error feteching data",
        data: error,
      });
    });
};
exports.getAdminById = async (req, res) => {
  const id = req.params.id;
  console.log("Admin id", id);
  await adminModel
    .findById({ _id: id })
    .then((data) => {
      if (!data || data == undefined) {
        res.json({
          status: 400,
          message: "Admin Not Found",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          message: "Admin Retrieved Successfully",
          data: data,
        });
      }
    })
    .catch((error) => {
      res.json({
        status: 500,
        message: "Error feteching data",
        data: error,
      });
    });
};
exports.updateAdminById = async (req, res) => {
  await adminModel
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      if (!data || data == undefined) {
        res.json({
          status: 400,
          message: "Admin Not Found",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          message: "Admin Updated Successfully",
          data: data,
        });
      }
    })
    .catch((error) => {
      res.json({
        status: 500,
        message: "Error updating data",
        data: error,
      });
    });
};
exports.updateAdmin = async (req, res) => {
  const id = req.params.id;
  console.log("Admin id", id);
  const admin = new adminModel(req.body, { new: true });
  await admin
    .save()
    .then((data) => {
      if (!data || data == undefined) {
        res.json({
          status: 400,
          message: "Admin Not Found",
          data: data,
        });
      } else {
        res.json({
          status: 200,
          message: "Admin Updated Successfully",
          data: data,
        });
      }
    })
    .catch((error) => {
      res.json({
        status: 500,
        message: "Error updating data",
        data: error,
      });
    });
};
exports.changeAssignmentStatus = async (req, res) => {};
