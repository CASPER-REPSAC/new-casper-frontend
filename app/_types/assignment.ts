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
  submits: {
    name: string;
    score: number | null;
    submitDate: string;
    submitId: number;
    files: { src: string; name: string }[];
    userId: string;
  }[];
  assignment: {
    assignmentId: number;
    title: string;
    category: string;
    description: string;
    deadline: string;
    userId: string;
    name: string;
  };
  files: { src: string; name: string }[];
};

export type SubmitDetail = {
  submit: {
    submitId: number;
    assignmentId: number;
    userId: string;
    name: string;
    submitDate: string;
    content: string | null;
    score: number | null;
    feedback: string | null;
  };
  files: { src: string; name: string }[];
};

export type AssignmentCreateFormType = z.infer<
  typeof assignmentCreateFormSchema
>;
