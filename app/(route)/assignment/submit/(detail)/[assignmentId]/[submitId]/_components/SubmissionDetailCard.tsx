'use client';

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
import { useSubmissionDetail } from '@app/_hooks/apis/assignment/useSubmission';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { NEW_PATH } from '@app/_constants/urls';
import { formatDate } from 'date-fns';
import FileAttachment from '@app/_components/common/FileAttaachment';
import { useMutation } from '@tanstack/react-query';
import assignmentService from '@app/_service/assignmentService';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import MoreOptionMenu from '@app/_components/common/MoreOptionMenu';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';

export default function SubmissionDetailCard() {
  const params = useParams<{
    assignmentId: string;
    submitId: string;
  }>();
  const { data } = useSubmissionDetail({
    assignmentId: Number(params.assignmentId),
    submitId: Number(params.submitId),
  });

  const { data: myInfo } = useMyInfo();

  if (!data) return 'null1';

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
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button asChild size="lg" className="w-full" variant="outline">
          <Link
            href={NEW_PATH.assignmentDetail.url(Number(params.assignmentId))}
          >
            과제로 돌아가기
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function KebabMenu() {
  const params = useParams<{
    assignmentId: string;
    submitId: string;
  }>();
  const { toast } = useToast();
  const { push } = useRouter();
  const { mutate: deleteSubmit } = useMutation({
    mutationFn: () =>
      assignmentService.deleteSubmit({
        assignmentId: Number(params.assignmentId),
        submitId: Number(params.submitId),
      }),
    onSuccess: () => {
      toast({
        title: '제출 삭제 완료',
      });
      push(NEW_PATH.assignmentDetail.url(Number(params.assignmentId)));
    },
    onError: () => {
      toast({
        title: '제출 삭제 실패',
      });
    },
  });

  return (
    <MoreOptionMenu
      editHref={NEW_PATH.submitEdit.url({
        assignmentId: Number(params.assignmentId),
        submitId: Number(params.submitId),
      })}
      onDelete={() => deleteSubmit()}
    />
  );
}
