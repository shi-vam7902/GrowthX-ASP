const zod = require("zod");

const assignmentValidation = zod.object({
  body: zod.object({
    userId: zod
      .string()
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format for userId")
      .optional(),
    adminId: zod
      .string()
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format for adminId")
      .optional(),
    status: zod
      .string()
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId format for status")
      .optional(),
    assignmentName: zod
      .string()
      .min(2, "The minimum length of assignmentName should be 2")
      .max(100, "The maximum length of assignmentName should be 100")
      .nonempty("assignmentName is required"),
  }),
});

module.exports = assignmentValidation;
