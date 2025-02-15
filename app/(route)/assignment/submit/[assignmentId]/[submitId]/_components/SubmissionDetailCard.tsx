'use client';

import { Button } from '@app/_shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@app/_shadcn/components/ui/card';
import { Label } from '@app/_shadcn/components/ui/label';
import { Textarea } from '@app/_shadcn/components/ui/textarea';
import { ArrowLeftIcon, DownloadIcon } from 'lucide-react';
import { useSubmissionDetail } from '@app/_hooks/apis/assignment/useSubmission';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { NEW_PATH } from '@app/_constants/urls';

export default function SubmissionDetailCard() {
  const params = useParams<{
    assignmentId: string;
    submitId: string;
  }>();
  const { data } = useSubmissionDetail({
    assignmentId: Number(params.assignmentId),
    submitId: Number(params.submitId),
  });
  if (!data) return null;

  const { submit, files } = data;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">제출 상세 정보</CardTitle>
          <Button asChild variant="outline" size="icon">
            <Link
              href={NEW_PATH.assignmentDetail.url(Number(params.assignmentId))}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="sr-only">뒤로 가기</span>
            </Link>
          </Button>
        </div>
        <CardDescription>
          과제 #{submit.assignmentId} - 제출 #{submit.submitId}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="font-semibold">학생 이름</Label>
            <p>{submit.name}</p>
          </div>
          <div>
            <Label className="font-semibold">제출 일시</Label>
            <p>{submit.submitDate}</p>
          </div>
        </div>

        <div>
          <Label htmlFor="content" className="font-semibold">
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

        <div>
          <Label className="font-semibold">첨부 파일</Label>
          <Button variant="outline" className="mt-1">
            <DownloadIcon className="mr-2 h-4 w-4" />
            {files} 다운로드
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
