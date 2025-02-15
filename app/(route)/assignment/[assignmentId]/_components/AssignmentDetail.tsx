'use client';

import Link from 'next/link';
import {
  CalendarIcon,
  FileTextIcon,
  ArrowLeftIcon,
  UserIcon,
  EditIcon,
  DownloadIcon,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@app/_shadcn/components/ui/dropdown-menu';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { formatDate, differenceInMilliseconds, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { HOUR, MINUTE, SECOND } from '@app/_constants/time';

interface Props {
  assignmentId: number;
}

export default function AssignmentDetail({ assignmentId }: Props) {
  const { data: assignmentDetail, isLoading } = useAssignmentDetail({
    assignmentId,
  });
  const { data: myInfo } = useMyInfo();

  if (isLoading) return <Spinner />;
  if (!assignmentDetail) return <> 데이터 없음 </>;

  const isAuthor = myInfo?.id === assignmentDetail.assignment.userId;
  const { files, assignment } = assignmentDetail;

  const deadline = parseISO(assignment.deadline);
  const isDeadline = deadline < new Date();

  return (
    <Card className="mx-auto mb-8 max-w-4xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="mb-2 text-2xl">{assignment.title}</CardTitle>
          <FileSection files={files} />
        </div>
        <CardDescription>{assignment.category}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="mb-6 text-gray-600">{assignment.description}</p>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center text-lg font-semibold">
            <CalendarIcon className="mr-2 h-5 w-5 text-blue-500" />
            <span>마감일: {formatDate(deadline, 'yyyy-MM-dd HH:mm')}</span>
          </div>
          {isDeadline ? (
            <Badge variant="destructive" className="text-lg">
              마감됨
            </Badge>
          ) : (
            <CountDown deadline={deadline} />
          )}
        </div>
        <div className="mb-6 flex items-center text-sm text-muted-foreground">
          <UserIcon className="mr-2 h-4 w-4" />
          작성자: {assignment.name}
        </div>
        <div className="flex space-x-4">
          {isAuthor ? (
            <Button asChild className="w-full">
              <Link
                href={NEW_PATH.assignmentEdit.url(assignment.assignmentId)}
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

function FileSection({ files }: { files: { name: string; src: string }[] }) {
  const { toast } = useToast();

  const handleDownloadError = async (downloadFn: () => Promise<void>) => {
    try {
      await downloadFn();
    } catch (error) {
      toast({
        title: '파일 다운로드 오류',
        description: '알 수 없는 에러가 발생했어요.\n개발자에게 문의 해주세요.',
      });
    }
  };

  const downloadFile = async (file: { name: string; src: string }) => {
    const response = await fetch(file.src);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const downloadAllFiles = async () => {
    await Promise.all(files.map((file) => downloadFile(file)));
  };

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">첨부 파일({files.length})</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {files.map((file) => (
            <DropdownMenuItem
              onSelect={() => handleDownloadError(() => downloadFile(file))}
              key={file.name}
            >
              {file.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleDownloadError(downloadAllFiles)}
      >
        <DownloadIcon className="size-4" />
      </Button>
    </div>
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
    <span className="text-sm text-slate-400">
      {days > 0 && `${days}일 `}
      {hours > 0 && `${hours}시간 `}
      {minutes > 0 && `${minutes}분 `}
      {seconds > 0 && `${seconds}초 `}
      남음
    </span>
  );
}
