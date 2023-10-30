import { z } from 'zod';

export const taskSchema = z.object({
  id: z.number(),
  name: z.string(),
  feedback: z.string(),
  rating: z.number(),
  status: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
