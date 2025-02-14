'use client';

import Link from 'next/link';
import { UserIcon, DownloadIcon } from 'lucide-react';
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
import { useRecoilValue } from 'recoil';
import { roleState } from '@app/_store/permissionAtoms';
import { useAssignmentDetail } from '@app/_hooks/apis/assignment/useAssignment';
import Spinner from '@app/_components/Spinner';

export default function SubmitList() {
  const role = useRecoilValue(roleState);
  const params = useParams<{ assignmentId: string; submitId: string }>();

  const { data: assignmentDetail, isLoading } = useAssignmentDetail(
    Number(params.assignmentId),
  );

  if (isLoading) return <Spinner />;

  const submissions: {
    id: number;
    name: string;
    submittedAt: string;
    score: number;
    file: string;
  }[] = assignmentDetail?.submits || [];

  console.log(submissions);

  if (!(role === '정회원' || role === '관리자')) return null;
  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-xl">
          <span className="flex items-center">
            <UserIcon className="mr-2 h-5 w-5" />
            제출자 목록
          </span>
          <Badge variant="secondary">총 제출 수: {submissions.length}</Badge>
        </CardTitle>
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
                  제출자가 없습니다.
                </TableCell>
              </TableRow>
            )}
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell className="font-medium">{submission.name}</TableCell>
                <TableCell>{submission.submittedAt}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={submission.score}
                    className="w-20"
                    min="0"
                    max="100"
                  />
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    {submission.file}
                  </Button>
                </TableCell>
                <TableCell className="text-right">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={NEW_PATH.submitDetail.url({
                        assignmentId: Number(params.assignmentId),
                        submitId: submission.id,
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
  );
}
