import assignmentService from '@app/_service/assignmentService';
import { formatDate } from 'date-fns';
import {
  CalendarIcon,
  BookOpenIcon,
  UserIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  StarIcon,
} from 'lucide-react';
import Link from 'next/link';
import { NEW_PATH } from '@app/_constants/urls';
import { Badge } from '@app/_shadcn/components/ui/badge';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@app/_shadcn/components/ui/card';
import CreateButton from './_components/CreateButton';

interface Props {
  searchParams: { page: string };
}

export default async function AssignmentListPage({ searchParams }: Props) {
  const { assignments } = await assignmentService.getAssignmentList(
    Number(searchParams.page),
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case '제출완료':
        return (
          <Badge variant="secondary" className="ml-2">
            <CheckCircleIcon className="mr-1 h-3 w-3" />
            제출완료
          </Badge>
        );
      case '진행중':
        return (
          <Badge variant="default" className="ml-2">
            <ClockIcon className="mr-1 h-3 w-3" />
            진행중
          </Badge>
        );
      case '마감됨':
        return (
          <Badge variant="destructive" className="ml-2">
            <XCircleIcon className="mr-1 h-3 w-3" />
            마감됨
          </Badge>
        );
      case '채점완료':
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
        <CreateButton />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {assignments.map(
          ({ assignmentId, name, title, progress, category, deadline }) => (
            <Card
              key={assignmentId}
              className="overflow-hidden transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{title}</CardTitle>
                  {getStatusBadge(progress)}
                </div>
                <CardDescription>{category}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formatDate(deadline, 'yyyy-MM-dd HH:mm')} 마감
                  </div>
                </div>
                <div className="mb-4 flex items-center text-sm text-muted-foreground">
                  <UserIcon className="mr-2 h-4 w-4" />
                  작성자: {name}
                </div>
                <Button asChild variant="secondary" className="w-full">
                  <Link href={NEW_PATH.assignmentDetail.url(assignmentId)}>
                    <BookOpenIcon className="mr-2 h-4 w-4" />
                    상세 보기
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ),
        )}
      </div>
    </div>
  );
}
