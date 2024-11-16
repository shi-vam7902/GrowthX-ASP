const mongoose = require("mongoose");
const schema = mongoose.Schema;
const statusSchema = new schema(
  {
    statusName: {
      type: String,
      unique: true,
      lowercase: true,
    },
    statusDesc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("status", statusSchema);
