'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@app/_shadcn/components/ui/card';
import { Input } from '@app/_shadcn/components/ui/input';
import { Textarea } from '@app/_shadcn/components/ui/textarea';
import { Button } from '@app/_shadcn/components/ui/button';
import { SaveIcon } from 'lucide-react';
import { useSubmissionDetail } from '@app/_hooks/apis/assignment/useSubmission';
import { useParams, useRouter } from 'next/navigation';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
} from '@app/_shadcn/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import assignmentService from '@app/_service/assignmentService';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { NEW_PATH } from '@app/_constants/urls';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  score: z.number().min(0).max(100),
  feedback: z.string().min(1),
});

function FeedbackSection() {
  const { data: myInfo } = useMyInfo();
  const params = useParams<{
    assignmentId: string;
    submitId: string;
  }>();
  const assignmentId = Number(params.assignmentId);
  const submitId = Number(params.submitId);
  const { data } = useSubmissionDetail({
    assignmentId,
    submitId,
  });
  const { toast } = useToast();
  const { push } = useRouter();
  const { mutate: updateFeedback } = useMutation({
    mutationFn: ({ feedback, score }: z.infer<typeof formSchema>) =>
      assignmentService.updateFeedback({
        submitId,
        feedback,
        score,
      }),
    onSuccess: () => {
      toast({
        title: '피드백이 저장되었습니다.',
      });
      push(NEW_PATH.assignmentDetail.url(Number(assignmentId)));
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: '피드백 저장에 실패했습니다.',
      });
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      score: data?.submit.score ?? 0,
      feedback: data?.submit.feedback ?? '',
    },
    resolver: zodResolver(formSchema),
  });

  const onValid = ({ feedback, score }: z.infer<typeof formSchema>) => {
    updateFeedback({ feedback, score });
  };

  if (!myInfo || myInfo?.role === 'associate') {
    return null;
  }
  if (!data) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>피드백</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onValid)}
          >
            <FormField
              control={form.control}
              name="score"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="font-semibold">점수</FormLabel>
                  <Input
                    type="number"
                    min={0}
                    max={100}
                    {...field}
                    onChange={(e) => {
                      field.onChange(Number(e.target.value));
                    }}
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="font-semibold">피드백</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="학생에게 피드백을 입력하세요..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              <SaveIcon className="mr-2 h-4 w-4" />
              점수 및 피드백 저장
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default FeedbackSection;
