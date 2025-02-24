'use client';

import Link from 'next/link';
import {
  CalendarIcon,
  FileTextIcon,
  UserIcon,
  ArrowLeftIcon,
} from 'lucide-react';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@app/_shadcn/components/ui/card';
import { Badge } from '@app/_shadcn/components/ui/badge';
import { NEW_PATH } from '@app/_constants/urls';

import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import Spinner from '@app/_components/Spinner';
import { useAssignmentDetail } from '@app/_hooks/apis/assignment/useAssignment';

import { formatDate, differenceInMilliseconds, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { HOUR, MINUTE, SECOND } from '@app/_constants/time';
import FileAttachment from '@app/_components/common/FileAttaachment';
import EditAndDeleteMenu from '@app/_components/common/EditAndDeleteMenu';
import { useMutation } from '@tanstack/react-query';
import assignmentService from '@app/_service/assignmentService';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { useParams, useRouter } from 'next/navigation';

interface Props {
  assignmentId: number;
}

export default function AssignmentDetail({ assignmentId }: Props) {
  const { data: assignmentDetail, isLoading } = useAssignmentDetail({
    assignmentId,
  });
  const { push } = useRouter();
  const { toast } = useToast();
  const { mutate: deleteAssignment } = useMutation({
    mutationFn: () => assignmentService.deleteAssignment(assignmentId),
    onSuccess: () => {
      toast({
        title: '과제 삭제 완료',
      });
      push(NEW_PATH.assignmentList.url(1));
    },
    onError: () => {
      toast({
        title: '과제 삭제 실패',
      });
    },
  });

  const { data: myInfo } = useMyInfo();

  if (isLoading) return <Spinner />;
  if (!assignmentDetail) return <> 데이터 없음 </>;

  const isAuthor = myInfo?.id === assignmentDetail.assignment.userId;
  const { files, assignment, submits } = assignmentDetail;
  const deadline = parseISO(assignment.deadline);
  const isDeadline = deadline < new Date();

  const mySubmit = submits?.find((submit) => submit.userId === myInfo?.id);

  return (
    <Card className="mx-auto mb-8 max-w-4xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="mb-2 text-2xl">{assignment.title}</CardTitle>
          {isAuthor && (
            <EditAndDeleteMenu
              onEdit={() =>
                push(NEW_PATH.assignmentEdit.url(assignment.assignmentId))
              }
              onDelete={deleteAssignment}
            />
          )}
        </div>
        <CardDescription>{assignment.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 ">
        <p className=" text-gray-600">{assignment.description}</p>
        <FileAttachment files={files} />

        <div className="flex items-center justify-between text-xl font-semibold">
          {isDeadline ? (
            <Badge variant="destructive">마감됨</Badge>
          ) : (
            <div className="flex items-center ">
              <CalendarIcon className="text-blue-500" />
              <span>
                마감일: <CountDown deadline={deadline} />
              </span>
            </div>
          )}
          <span className="text-sm text-muted-foreground">
            {formatDate(deadline, 'yyyy-MM-dd HH:mm')} 까지
          </span>
        </div>

        <div className="mb-6 flex items-center text-sm text-muted-foreground">
          <UserIcon className="mr-2 h-4 w-4" />
          작성자: {assignment.name}
        </div>
      </CardContent>
      <CardFooter>
        <ActionButton isAuthor={isAuthor} isSubmitted={!!mySubmit} />
      </CardFooter>
    </Card>
  );
}

function CountDown({ deadline }: { deadline: Date }) {
  const [timeLeftInMs, setTimeLeftInMs] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const diffMs = differenceInMilliseconds(deadline, now);
      setTimeLeftInMs(diffMs);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  const days = Math.floor(timeLeftInMs / (24 * HOUR));
  const hours = Math.floor((timeLeftInMs % (24 * HOUR)) / HOUR);
  const minutes = Math.floor((timeLeftInMs % HOUR) / MINUTE);
  const seconds = Math.floor((timeLeftInMs % MINUTE) / SECOND);

  if (timeLeftInMs < 0) {
    return null;
  }

  return (
    <span>
      {days > 0 && `${days.toString()}일 `}
      {hours > 0 && `${hours.toString().padStart(2, '0')}: `}
      {minutes > 0 && `${minutes.toString().padStart(2, '0')}: `}
      {seconds > 0 && `${seconds.toString().padStart(2, '0')}`}
      남음
    </span>
  );
}

/**
 * 모두 -> 과제 목록 돌아가기
 * 준회원 -> 제출 없음 -> 제출하기
 */
function ActionButton({
  isSubmitted,
  isAuthor,
}: {
  isSubmitted: boolean;
  isAuthor: boolean;
}) {
  const { assignmentId } = useParams();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      {!isSubmitted && !isAuthor && (
        <Button size="lg" asChild className="w-full">
          <Link
            href={NEW_PATH.submitCreate.url({
              assignmentId: Number(assignmentId),
            })}
          >
            <FileTextIcon className="mr-2 h-4 w-4" />
            과제 제출
          </Link>
        </Button>
      )}
      <Button size="lg" variant="secondary" className="w-full" asChild>
        <Link href={NEW_PATH.assignmentList.url(1)}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          과제 목록으로 돌아가기
        </Link>
      </Button>
    </div>
  );
}
