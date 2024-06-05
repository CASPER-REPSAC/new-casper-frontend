'use client';

import { ERROR_MESSAGE } from '@app/_constants/message';
import { Button } from '@app/_shadcn/components/ui/button';
import { BoardDetailParams } from '@app/_types/boardTypes';
import { ErrorProps } from '@app/_types/errorTypes';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

function Error({ error, reset }: ErrorProps) {
  const { boardType } = useParams<BoardDetailParams>();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  if (error.message === ERROR_MESSAGE['-301'])
    return (
      <div className="flex-center h-full w-full flex-col gap-4">
        <h2>비밀글에 접근할 수 없어요.</h2>
        <Button asChild>
          <Link href={`/boards/${boardType}/list/1`}>목록으로 돌아가기</Link>
        </Button>
      </div>
    );

  return (
    <div className="flex-center h-full w-full flex-col gap-4">
      <h2>글을 불러오는 중 에러가 발생했어요!</h2>

      <Button onClick={() => reset()}>다시 시도하기</Button>
    </div>
  );
}

export default Error;
