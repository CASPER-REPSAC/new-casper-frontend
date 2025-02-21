'use client';

import Link from 'next/link';
import { DownloadIcon, UserIcon } from 'lucide-react';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@app/_shadcn/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@app/_shadcn/components/ui/table';
import { Input } from '@app/_shadcn/components/ui/input';
import { Badge } from '@app/_shadcn/components/ui/badge';
import { NEW_PATH } from '@app/_constants/urls';
import { useParams } from 'next/navigation';
import { useAssignmentDetail } from '@app/_hooks/apis/assignment/useAssignment';
import Spinner from '@app/_components/Spinner';
import { formatDate } from 'date-fns';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import FileAttachment from '@app/_components/common/FileAttaachment';
import { useMutation } from '@tanstack/react-query';
import assignmentService from '@app/_service/assignmentService';
import { useForm } from 'react-hook-form';
import { FormField } from '@app/_shadcn/components/ui/form';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

export default function SubmitList() {
  const { data: myInfo } = useMyInfo();

  const params = useParams<{ assignmentId: string; submitId: string }>();

  const { toast } = useToast();

  const { mutate: updateAllScoreMutate, isPending } = useMutation({
    mutationFn: (body: { submitId: number; score: number }[]) => {
      return assignmentService.updateAllScore(body);
    },
  });

  const { data: assignmentDetail, isLoading } = useAssignmentDetail({
    assignmentId: Number(params.assignmentId),
  });

  const scores: { [submitId: string]: number } = {};
  assignmentDetail?.submits.forEach(({ submitId, score }) => {
    scores[submitId] = score ?? 0;
  });

  const { control, handleSubmit } = useForm<{
    [submitId: string]: number;
  }>({ defaultValues: scores });

  if (isLoading) return <Spinner />;

  if (!myInfo) return null;

  const submissions = assignmentDetail?.submits || [];

  const updateAllScore = (data: { [submitId: string]: number }) => {
    const body = Object.entries(data).map(([submitId, score]) => ({
      submitId: Number(submitId),
      score,
    }));
    updateAllScoreMutate(body, {
      onSuccess: () => {
        toast({
          title: '점수가 저장되었어요.',
        });
      },
      onError: () => {
        toast({
          title: '점수 저장에 실패했어요.',
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(updateAllScore)}>
      <Card className="relative mx-auto max-w-4xl ">
        <CardHeader className="sticky top-12 z-10 bg-background">
          {myInfo.role === 'associate' ? (
            <CardTitle className="flex items-center justify-between text-xl">
              제출 정보
            </CardTitle>
          ) : (
            <CardTitle className="flex items-center justify-between bg-background text-xl">
              <div className="flex items-center gap-2">
                <span className="flex items-center">
                  <UserIcon className="mr-2 h-5 w-5" />
                  제출자 목록
                </span>
                <Badge variant="secondary">
                  총 제출 수: {submissions.length}
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <DownloadIcon className="mr-2 size-4" />
                  모든 파일 다운로드
                </Button>
                <Button type="submit" disabled={isPending}>
                  점수 저장 {isPending && <Spinner />}
                </Button>
              </div>
            </CardTitle>
          )}
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>이름</TableHead>
                <TableHead>제출일</TableHead>
                <TableHead>점수</TableHead>
                <TableHead>파일</TableHead>
                <TableHead className="text-right">액션</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    제출 정보가 없습니다.
                  </TableCell>
                </TableRow>
              )}
              {submissions?.map((submission) => (
                <TableRow key={submission.submitId}>
                  <TableCell className="font-medium">
                    {submission.name}
                  </TableCell>
                  <TableCell>
                    {formatDate(
                      new Date(submission.submitDate),
                      'M월 dd일 HH:mm',
                    )}
                  </TableCell>
                  <TableCell>
                    <FormField
                      control={control}
                      name={String(submission.submitId)}
                      render={({ field }) => (
                        <Input
                          type="number"
                          className="w-20"
                          min="0"
                          max="100"
                          {...field}
                          value={field.value ?? ''}
                          onChange={(e) => {
                            field.onChange(Number(e.target.value));
                          }}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <FileAttachment size="sm" files={submission.files} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href={NEW_PATH.submitDetail.url({
                          assignmentId: Number(params.assignmentId),
                          submitId: submission.submitId,
                        })}
                      >
                        상세보기
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </form>
  );
}
