'use client';

import Spinner from '@app/_components/Spinner';
import { NEW_PATH } from '@app/_constants/urls';
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
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  contents: z.string().min(1),
  urls: z.array(z.string()).optional(),
});

function AssignmentSubmitForm() {
  const searchParams = useSearchParams();
  const assignmentId = searchParams.get('assignmentId');
  const { push } = useRouter();
  const { toast } = useToast();
  const { mutate: createSubmit, isPending } = useMutation({
    mutationFn: (data: {
      assignmentId: number;
      contents: string;
      urls?: string[];
    }) => assignmentService.createSubmit(data),
    onSuccess: ({ submitId }) => {
      push(
        NEW_PATH.submitDetail.url({
          assignmentId: Number(assignmentId),
          submitId: Number(submitId),
        }),
      );
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
      contents: '',
      urls: [],
    },
    resolver: zodResolver(formSchema),
  });

  const { mutate: uploadFiles, isPending: isUploading } =
    useFileUploadMutation();

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
      contents: data.contents,
      urls: data.urls,
    });
  };

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
          form.setValue(
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
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="contents"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <Label>설명</Label>
              <Textarea {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
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

        <Button className="w-full" type="submit" disabled={isPending}>
          제출 {isPending && <Spinner />}
        </Button>
      </form>
    </Form>
  );
}

export default AssignmentSubmitForm;
