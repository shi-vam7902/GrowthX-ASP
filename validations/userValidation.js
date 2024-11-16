const zod = require("zod");

const userValidation = zod.object({
  body: zod.object({
    userName: zod
      .string()
      .min(2, "The minimum length of userName should be 2")
      .max(50, "The maximum length of userName should be 50"),
    email: zod.string().email("Invalid email format"),
    password: zod
      .string()
      .min(8, "The minimum length of password should be 8")
      .max(100, "The maximum length of password should be 100"),
    assignmentId: zod
      .array(
        zod
          .string()
          .regex(
            /^[0-9a-fA-F]{24}$/,
            "Invalid ObjectId format for assignmentId"
          )
      )
      .optional(),
    adminId: zod
      .array(
        zod
          .string()
          .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format for adminId")
      )
      .optional(),
    status: zod
      .string()
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format for status")
      .optional(),
  }),
});

module.exports = userValidation;
