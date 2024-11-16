//imports
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const DbConnection = require("../database/Db");

//routes
const AdminRoutes = require("../routes/adminRoutes");
const StatusRoutes = require("../routes/statusRoutes");
const UserRoutes = require("../routes/userRoutes");
const AssignmentRoutes = require("../routes/assignmentRoutes");
//usages
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/auth", AdminRoutes);
app.use("/statuses", StatusRoutes);
app.use("/users", UserRoutes);
app.use("/assignments", AssignmentRoutes);
//creating Server
app.listen(PORT, (error) => {
  if (error) {
    console.log("Error in starting the server");
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});

DbConnection();
