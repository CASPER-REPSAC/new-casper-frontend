'use client';

import { useState } from 'react';
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

export default function AssignmentDetail() {
  const [isSubmitter] = useState(true);

  const assignment = {
    id: 1,
    title: 'React 기초',
    description:
      'React의 기본 개념과 훅에 대해 학습하고 간단한 애플리케이션을 만듭니다. 컴포넌트 생성, 상태 관리, 그리고 props 전달 방법을 익힙니다.',
    dueDate: '2023-07-15',
    subject: '프론트엔드',
    author: '김교수',
  };

  return (
    <Card className="mx-auto mb-8 max-w-4xl">
      <CardHeader>
        <CardTitle className="mb-2 text-2xl">{assignment.title}</CardTitle>
        <CardDescription>{assignment.subject}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="mb-6 text-gray-600">{assignment.description}</p>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center text-lg font-semibold">
            <CalendarIcon className="mr-2 h-5 w-5 text-blue-500" />
            마감일: {assignment.dueDate}
          </div>

          <Badge variant="destructive" className="text-lg">
            마감됨
          </Badge>
        </div>
        <div className="mb-6 flex items-center text-sm text-muted-foreground">
          <UserIcon className="mr-2 h-4 w-4" />
          작성자: {assignment.author}
        </div>
        <div className="flex space-x-4">
          {isSubmitter ? (
            <Button asChild className="w-full">
              <Link
                href={NEW_PATH.assignmentEdit.url({
                  assignmentId: assignment.id,
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
              <Link href={NEW_PATH.assignmentSubmit.url} className="flex-1">
                <FileTextIcon className="mr-2 h-4 w-4" />
                과제 제출
              </Link>
            </Button>
          )}
          <Button asChild variant="outline" className="w-full">
            <Link href={NEW_PATH.assignmentList.url} className="flex-1">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              목록으로
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
