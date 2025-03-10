import assignmentService from '@app/_service/assignmentService';
import { compareAsc, formatDate } from 'date-fns';
import {
  CalendarIcon,
  BookOpenIcon,
  UserIcon,
  CheckCircleIcon,
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
import { cn } from '@app/_shadcn/lib/utils';
import CommonPagination from '../../../_components/common/CommonPagination';
import CreateButton from './_components/CreateButton';

interface Props {
  searchParams: Promise<{ page: string }>;
}

export default async function AssignmentListPage(props: Props) {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const {
    items: assignments,
    totalItems,
    currentPage,
  } = await assignmentService.getAssignmentList(page);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case '제출완료':
        return (
          <Badge variant="blue" className="ml-2">
            <CheckCircleIcon className="mr-1 h-3 w-3" />
            제출완료
          </Badge>
        );
      case '미제출':
        return (
          <Badge variant="destructive" className="ml-2">
            <XCircleIcon className="mr-1 h-3 w-3" />
            미제출
          </Badge>
        );
      case '채점완료':
        return (
          <Badge variant="green" className="ml-2">
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
      <section className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">과제 목록</h1>
        <CreateButton />
      </section>
      {assignments.length <= 0 ? (
        <section className="my-32 text-center">과제가 없습니다.</section>
      ) : (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assignments.map(
            ({ assignmentId, name, title, progress, category, deadline }) => {
              const isEnded = compareAsc(deadline, new Date()) < 0;
              return (
                <Card
                  key={assignmentId}
                  className={cn(
                    'overflow-hidden transition-shadow hover:shadow-lg',
                    isEnded && 'opacity-50 bg-slate-100/40',
                  )}
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
                        {isEnded && (
                          <Badge variant="secondary" className="ml-2">
                            <XCircleIcon className="mr-1 h-3 w-3" />
                            마감됨
                          </Badge>
                        )}
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
              );
            },
          )}
        </section>
      )}

      <CommonPagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={10}
        getHref={(page) => NEW_PATH.assignmentList.url(page)}
        className="my-8"
      />
    </div>
  );
}
