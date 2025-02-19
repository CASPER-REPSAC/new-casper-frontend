'use client';

import Spinner from '@app/_components/Spinner';
import { NEW_PATH } from '@app/_constants/urls';
import { useSubmissionDetail } from '@app/_hooks/apis/assignment/useSubmission';
import useFileUploadMutation from '@app/_hooks/apis/shared/useFileUploadMutation';
import assignmentService from '@app/_service/assignmentService';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from '@app/_shadcn/components/ui/form';
import { Input } from '@app/_shadcn/components/ui/input';
import { Label } from '@app/_shadcn/components/ui/label';
import { Textarea } from '@app/_shadcn/components/ui/textarea';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  content: z.string().min(1),
  urls: z.array(z.string()).optional(),
});

export function SubmitCreateForm() {
  const searchParams = useSearchParams();
  const assignmentId = searchParams.get('assignmentId');
  const { push } = useRouter();
  const { toast } = useToast();
  const { mutate: createSubmit, isPending } = useMutation({
    mutationFn: (data: {
      assignmentId: number;
      content: string;
      urls?: string[];
    }) => assignmentService.createSubmit(data),
    onSuccess: () => {
      push(NEW_PATH.assignmentDetail.url(Number(assignmentId)));
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: '제출에 실패했습니다.',
          description: error.response?.data.message,
        });
      }
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      content: '',
      urls: [],
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (!assignmentId) {
      toast({
        variant: 'destructive',
        title: '제출에 실패했습니다.',
        description: 'assignmentId가 없습니다.',
      });
      return;
    }

    createSubmit({
      assignmentId: Number(assignmentId),
      content: data.content,
      urls: data.urls,
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <ContentField />
        <FileInputField />

        <Button className="w-full" type="submit" disabled={isPending}>
          제출 {isPending && <Spinner />}
        </Button>
      </form>
    </Form>
  );
}

export function SubmitEditForm() {
  const searchParams = useSearchParams();
  const assignmentId = searchParams.get('assignmentId');
  const submitId = searchParams.get('submitId');
  const { push } = useRouter();
  const { toast } = useToast();
  const { data: submitDetail } = useSubmissionDetail({
    assignmentId: Number(assignmentId),
    submitId: Number(submitId),
  });
  const { mutate: updateSubmit, isPending } = useMutation({
    mutationFn: (data: {
      assignmentId: number;
      submitId: number;
      content: string;
      urls?: string[];
    }) => assignmentService.updateSubmit(data),
    onSuccess: () => {
      push(NEW_PATH.assignmentDetail.url(Number(assignmentId)));
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: '제출에 실패했습니다.',
          description: error.response?.data.message,
        });
      }
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      content: submitDetail?.submit.content ?? '',
      urls: submitDetail?.files.map((file) => file.src) ?? [],
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (!assignmentId) {
      toast({
        variant: 'destructive',
        title: '제출에 실패했습니다.',
        description: 'assignmentId가 없습니다.',
      });
      return;
    }

    updateSubmit({
      assignmentId: Number(assignmentId),
      submitId: Number(submitId),
      content: data.content,
      urls: data.urls,
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <ContentField />
        <FileInputField />

        <Button className="w-full" type="submit" disabled={isPending}>
          수정 하기 {isPending && <Spinner />}
        </Button>
      </form>
    </Form>
  );
}

function ContentField() {
  const { control } = useFormContext<z.infer<typeof formSchema>>();

  return (
    <FormField
      control={control}
      name="content"
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2">
          <Label>설명</Label>
          <Textarea {...field} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function FileInputField() {
  const { control, setValue } = useFormContext<z.infer<typeof formSchema>>();

  const { mutate: uploadFiles, isPending: isUploading } =
    useFileUploadMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    uploadFiles(
      {
        type: 'submit',
        files,
      },
      {
        onSuccess: (data) => {
          setValue(
            'urls',
            data.map((file) => file.url),
            {
              shouldValidate: true,
            },
          );
        },
      },
    );
  };

  return (
    <FormField
      control={control}
      name="urls"
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Label>첨부파일</Label>
            {isUploading && <Spinner />}
          </div>

          <Input
            ref={field.ref}
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </FormItem>
      )}
    />
  );
}
