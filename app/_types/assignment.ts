import { z } from 'zod';

export const assignmentCreateFormSchema = z.object({
  title: z.string(),
  category: z.string(),
  description: z.string(),
  deadline: z.string(),
  files: z
    .array(
      z.object({
        file: z.custom<File>(),
        name: z.string(),
        url: z.string(),
      }),
    )
    .optional(),
});

export type Assignment = {
  assignmentId: number;
  title: string;
  category: string;
  deadline: string;
  userId: string;
  name: string;
  progress: string;
};

export type AssignmentDetail = {
  submit: [];
  assignment: {
    assignmentId: number;
    title: string;
    category: string;
    description: string;
    deadline: string;
    userId: string;
    name: string;
  };
  assignmentFiles: [];
};

export type AssignmentCreateFormType = z.infer<
  typeof assignmentCreateFormSchema
>;
