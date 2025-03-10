'use client';

import assignmentService from '@app/_service/assignmentService';
import { useMutation } from '@tanstack/react-query';
import { formatDate } from 'date-fns';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSubmissionDetail } from '@app/_hooks/apis/assignment/useSubmission';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import EditAndDeleteMenu from '@app/_components/common/EditAndDeleteMenu';
import FileAttachment from '@app/_components/common/FileAttaachment';
import { NEW_PATH } from '@app/_constants/urls';
import { SubmitDetail } from '@app/_types/assignment';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@app/_shadcn/components/ui/card';
import { Label } from '@app/_shadcn/components/ui/label';
import { Textarea } from '@app/_shadcn/components/ui/textarea';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

export default function SubmissionDetailCard() {
  const searchParams = useSearchParams();
  const assignmentId = searchParams.get('assignmentId');
  const submitId = searchParams.get('submitId');
  const { data } = useSubmissionDetail({
    assignmentId: Number(assignmentId),
    submitId: Number(submitId),
  });

  const { data: myInfo } = useMyInfo();

  if (!data) return '데이터 없음';

  const { submit, files } = data;
  const isMine = myInfo?.id === submit?.userId;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">제출 상세 정보</CardTitle>
          {isMine && <KebabMenu />}
        </div>
        <CardDescription>
          과제 #{submit.assignmentId} - 제출 #{submit.submitId}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-lg font-semibold">학생 이름</Label>
            <p>{submit.name}</p>
          </div>
          <div>
            <Label className="text-lg font-semibold">제출 일시</Label>
            <p>{formatDate(submit.submitDate, 'yyyy-MM-dd HH:mm')}</p>
          </div>
        </div>

        <div>
          <Label htmlFor="content" className="text-lg font-semibold">
            제출 내용
          </Label>
          <Textarea
            id="content"
            value={submit?.content || ''}
            readOnly
            className="mt-1"
            rows={6}
          />
        </div>

        {files.length > 0 && <FileAttachment files={files} />}
        {myInfo?.id === submit.userId && <FeedbackSection submit={submit} />}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button asChild size="lg" className="w-full" variant="outline">
          <Link href={NEW_PATH.assignmentDetail.url(Number(assignmentId))}>
            과제로 돌아가기
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function KebabMenu() {
  const searchParams = useSearchParams();
  const assignmentId = Number(searchParams.get('assignmentId'));
  const submitId = Number(searchParams.get('submitId'));
  const { toast } = useToast();
  const { push } = useRouter();
  const { mutate: deleteSubmit } = useMutation({
    mutationFn: () =>
      assignmentService.deleteSubmit({
        assignmentId,
        submitId,
      }),
    onSuccess: () => {
      toast({
        title: '제출 삭제 완료',
      });
      push(NEW_PATH.assignmentDetail.url(assignmentId));
    },
    onError: () => {
      toast({
        title: '제출 삭제 실패',
      });
    },
  });

  return (
    <EditAndDeleteMenu
      onEdit={() =>
        push(
          NEW_PATH.submitEdit.url({
            assignmentId,
            submitId,
          }),
        )
      }
      onDelete={() => deleteSubmit()}
    />
  );
}

function FeedbackSection({ submit }: { submit: SubmitDetail['submit'] }) {
  return (
    <>
      <div>
        <Label className="text-lg font-semibold">채점 정보</Label>
        {submit.score !== null ? (
          <div>{submit.score}</div>
        ) : (
          <div className="italic text-black/50">아직 채점되지 않았어요.</div>
        )}
      </div>

      <div>
        <Label className="text-lg font-semibold">피드백</Label>
        <Textarea
          value={submit?.feedback || ''}
          readOnly
          className="mt-1"
          rows={6}
        />
      </div>
    </>
  );
}
