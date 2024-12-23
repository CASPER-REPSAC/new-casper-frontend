import { z } from 'zod';

export const assignmentCreateFormSchema = z.object({
  title: z.string(),
  category: z.string(),
  description: z.string(),
  deadline: z.string(),
  files: z.instanceof(FileList).optional(),
});

export type AssignmentCreateFormType = z.infer<
  typeof assignmentCreateFormSchema
>;
