const zod = require("zod");

const adminValidation = zod.object({
  body: zod.object({
    userName: zod
      .string()
      .min(2, "The minimum length of userName should be 2")
      .max(50, "The maximum length of userName should be 50"),
    // .message("userName is required"),
    email: zod.string().email("Invalid email format"),
    password: zod
      .string()
      .min(8, "The minimum length of password should be 8")
      .max(100, "The maximum length of password should be 100"),
    users: zod
      .array(
        zod.string({
          iid: zod
            .string()
            .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format for iid"),
        })
      )
      .optional(),
  }),
});

module.exports = adminValidation;
