const mongoose = require("mongoose");
const schema = mongoose.Schema;
const assignmentSchema = new schema(
  {
    userId: {
      type: schema.Types.ObjectId,
      ref: "status",
    },
    adminId: {
      type: schema.Types.ObjectId,
      ref: "admin",
    },
    status: {
      type: schema.Types.ObjectId,
      ref: "status",
    },
    assignmentName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("assignment", assignmentSchema);
