const mongoose = require("mongoose");
const schema = mongoose.Schema;
const adminSchema = new schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    users: [
      {
        type: schema.Types.ObjectId,
        ref: "user",
      },
    ],
    assignments: [
      {
        type: schema.Types.ObjectId,
        ref: "assignment",
      },
    ],
    status: {
      type: schema.Types.ObjectId,
      ref: "status",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("admin", adminSchema);
