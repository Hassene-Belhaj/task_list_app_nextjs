import { z } from "zod";

export const zValidation = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title should be of type string",
    })
    .min(2, { message: "Title should be at least 2 characters long" })
    .max(80, { message: "Title should be less than 80 characters long" }),

  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description should be of type string",
    })
    .min(4, { message: "Description should be at least 4 characters long" })
    .max(200, { message: "Description should be less than 200 characters long" }),
});
