const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const {
  sendMail,
  getWelcomeEmailTemplate,
  getLoginSuccessEmailTemplate,
} = require("../utils/mailer");

exports.signup = async (req, res) => {
  const user = new userModel(req.body);

  userModel
    .findOne({ email: req.body.email })
    .then((data) => {
      if (data == undefined || data == null) {
        user
          .save()
          .then((data) => {
            const welcomeEmailTemplate = getWelcomeEmailTemplate(data.userName);
            sendMail(
              data.email,
              "Welcome to Our Application",
              welcomeEmailTemplate
            );
            res.json({
              message: "User added successfully",
              status: 200,
              data: data,
            });
            // console.log("User=>", data);
          })
          .catch((err) => {
            res.json({
              message: "Error adding User",
              status: 400,
              error: err.message,
            });
          });
      } else {
        res.json({
          message: "User already exists",
          status: 500,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Error finding User",
        status: 400,
        error: err.message,
      });
    });
};
exports.getAllUsers = async (req, res) => {
  await userModel
    .find()
    .then((data) => {
      res.json({
        message: "All Users",
        status: 200,
        data: data,
      });
      console.log("User fetched", data);
    })
    .catch((err) => {
      res.json({
        message: "Error finding Users",
        status: 400,
        error: err.message,
      });
    });
};
exports.getUserById = async (req, res) => {
  const id = req.params.id;
  console.log("Getting User for id => ", id);

  await userModel
    .findById({ _id: id })
    .then((data) => {
      res.json({
        message: "User By Id",
        status: 200,
        data: data,
      });
      console.log("User fetched", data);
    })
    .catch((err) => {
      res.json({
        message: "Error finding User",
        status: 400,
        error: err.message,
      });
    });
};
exports.updateUserById = async (req, res) => {
  const id = req.params.id;
  console.log("Getting User for id => ", id);
  const update = req.body;
  await userModel
    .findByIdAndUpdate({ _id: id }, update, { new: true })
    .then((data) => {
      res.json({
        message: "User updated successfully",
        status: 200,
        data: data,
      });
      console.log("User updated", data);
    })
    .catch((err) => {
      res.json({
        message: "Error updating User",
        status: 400,
        error: err.message,
      });
    });
};
// console.log("Update User By Id called")
exports.login = async (req, res) => {
  console.log("under login..");
  const { email, password } = req.body;

  // Find astrologer by email
  await userModel
    .findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "user not found",
          status: 404,
        });
      }
      bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          // If passwords don't match, return error
          if (!isMatch) {
            return res.status(400).json({
              message: "Invalid password",
              status: 400,
            });
          }

          // Send login success email
          const loginSuccessEmailTemplate = getLoginSuccessEmailTemplate();
          sendMail(user.email, "Login Successful", loginSuccessEmailTemplate)
            .then(() => {
              // Return success response with user data
              res.status(200).json({
                message: "Login successful",
                status: 200,
                data: user,
              });
            })
            .catch((emailErr) => {
              console.error("Failed to send login success email:", emailErr);
              res.status(500).json({
                message: "Failed to send login success email",
                status: 500,
                error: emailErr.message,
              });
            });
        })
        .catch((bcryptErr) => {
          console.error("Error comparing passwords:", bcryptErr);
          res.status(500).json({
            message: "Error comparing passwords",
            status: 500,
            error: bcryptErr.message,
          });
        });
    })
    .catch((findErr) => {
      console.error("Error finding user:", findErr);
      res.status(500).json({
        message: "Error finding user",
        status: 500,
        error: findErr.message,
      });
    });
};
