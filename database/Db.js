const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const CONN_URL = process.env.CONN_URL;
const DbConnection = async () => {
  await mongoose
    .connect(CONN_URL)
    .then((suceess) => {
      console.log("Database Connected successfully");
    })
    .catch((error) => {
      console.log("Error in connecting the database =>" + error);
    });
};

module.exports = DbConnection;
