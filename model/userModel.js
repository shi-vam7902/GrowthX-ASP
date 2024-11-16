const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const schema = mongoose.Schema;
const userSchema = new schema(
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
    assignmentId: [
      {
        type: schema.Types.ObjectId,
        ref: "assignment",
      },
    ],
    adminId: [
      {
        type: schema.Types.ObjectId,
        ref: "admin",
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
userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    console.log("User password hashed", this.password);
  }
  next();
});
module.exports = mongoose.model("user", userSchema);
