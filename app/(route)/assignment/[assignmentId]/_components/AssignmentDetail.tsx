'use client';

import Link from 'next/link';
import {
  CalendarIcon,
  FileTextIcon,
  ArrowLeftIcon,
  UserIcon,
  EditIcon,
} from 'lucide-react';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@app/_shadcn/components/ui/card';
import { Badge } from '@app/_shadcn/components/ui/badge';
import { NEW_PATH } from '@app/_constants/urls';

import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import Spinner from '@app/_components/Spinner';
import { useAssignmentDetail } from '@app/_hooks/apis/assignment/useAssignment';

interface Props {
  assignmentId: number;
}

export default function AssignmentDetail({ assignmentId }: Props) {
  const { data: assignmentDetail, isLoading } =
    useAssignmentDetail(assignmentId);
  const { data: myInfo } = useMyInfo();

  if (isLoading) return <Spinner />;
  if (!assignmentDetail) return <> 데이터 없음 </>;

  const { assignment } = assignmentDetail;

  const isAuthor = myInfo?.id === assignmentDetail.assignment.userId;

  return (
    <Card className="mx-auto mb-8 max-w-4xl">
      <CardHeader>
        <CardTitle className="mb-2 text-2xl">{assignment.title}</CardTitle>
        <CardDescription>{assignment.category}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="mb-6 text-gray-600">{assignment.description}</p>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center text-lg font-semibold">
            <CalendarIcon className="mr-2 h-5 w-5 text-blue-500" />
            마감일: {assignment.deadline}
          </div>

          <Badge variant="destructive" className="text-lg">
            마감됨
          </Badge>
        </div>
        <div className="mb-6 flex items-center text-sm text-muted-foreground">
          <UserIcon className="mr-2 h-4 w-4" />
          작성자: {assignment.name}
        </div>
        <div className="flex space-x-4">
          {isAuthor ? (
            <Button asChild className="w-full">
              <Link
                href={NEW_PATH.assignmentEdit.url({
                  assignmentId: assignment.assignmentId,
                  submitId: 1,
                })}
                className="flex-1"
              >
                <EditIcon className="mr-2 h-4 w-4" />
                과제 수정
              </Link>
            </Button>
          ) : (
            <Button asChild className="w-full">
              <Link
                href={NEW_PATH.assignmentSubmit.url({
                  assignmentId: assignment.assignmentId,
                })}
                className="flex-1"
              >
                <FileTextIcon className="mr-2 h-4 w-4" />
                과제 제출
              </Link>
            </Button>
          )}
          <Button asChild variant="outline" className="w-full">
            <Link href={NEW_PATH.assignmentList.url(1)} className="flex-1">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              목록으로
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
