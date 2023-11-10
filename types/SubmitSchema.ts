import { z } from "zod"

export const schema = z.object({
  name: z.string().min(2, "Must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  feedbackText: z.string().min(10, "Must be at least 10 characters").max(245, "Must be less than 245 characters"),
  sentiment: z
    .string()
    .min(1, "Must select a sentiment")
    .refine((val: string) => sentiments.includes(val), {
      message: "Must select a valid sentiment"
    })
})
