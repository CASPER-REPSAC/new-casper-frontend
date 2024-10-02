import Link from 'next/link';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@app/_shadcn/components/ui/card';
import { Badge } from '@app/_shadcn/components/ui/badge';
import {
  CalendarIcon,
  BookOpenIcon,
  UserIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  StarIcon,
} from 'lucide-react';
import { NEW_PATH } from '@app/_constants/urls';

export default function AssignmentListPage() {
  const assignments = [
    {
      id: 1,
      title: 'React 기초',
      dueDate: '2023-07-15',
      subject: '프론트엔드',
      author: '김교수',
      status: 'submitted',
    },
    {
      id: 2,
      title: 'Next.js App Router',
      dueDate: '2023-07-20',
      subject: '웹 개발',
      author: '이교수',
      status: 'in_progress',
    },
    {
      id: 3,
      title: 'TypeScript 심화',
      dueDate: '2023-07-10',
      subject: '프로그래밍 언어',
      author: '박교수',
      status: 'expired',
    },
    {
      id: 3,
      title: 'TypeScript 심화',
      dueDate: '2023-07-10',
      subject: '프로그래밍 언어',
      author: '박교수',
      status: 'graded',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'submitted':
        return (
          <Badge variant="secondary" className="ml-2">
            <CheckCircleIcon className="mr-1 h-3 w-3" />
            제출완료
          </Badge>
        );
      case 'in_progress':
        return (
          <Badge variant="default" className="ml-2">
            <ClockIcon className="mr-1 h-3 w-3" />
            진행중
          </Badge>
        );
      case 'expired':
        return (
          <Badge variant="destructive" className="ml-2">
            <XCircleIcon className="mr-1 h-3 w-3" />
            마감됨
          </Badge>
        );
      case 'graded':
        return (
          <Badge variant="secondary" className="ml-2">
            <StarIcon className="mr-1 h-3 w-3" />
            채점완료
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">과제 목록</h1>
        <Button asChild>
          <Link href={NEW_PATH.assignmentCreate.url}>새 과제 만들기</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {assignments.map((assignment) => (
          <Card
            key={assignment.id}
            className="overflow-hidden transition-shadow hover:shadow-lg"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">{assignment.title}</CardTitle>
                {getStatusBadge(assignment.status)}
              </div>
              <CardDescription>{assignment.subject}</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center text-sm">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {assignment.dueDate}
                </div>
              </div>
              <div className="mb-4 flex items-center text-sm text-muted-foreground">
                <UserIcon className="mr-2 h-4 w-4" />
                작성자: {assignment.author}
              </div>
              <Button asChild variant="secondary" className="w-full">
                <Link href={NEW_PATH.assignmentDetail.url(assignment.id)}>
                  <BookOpenIcon className="mr-2 h-4 w-4" />
                  상세 보기
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
