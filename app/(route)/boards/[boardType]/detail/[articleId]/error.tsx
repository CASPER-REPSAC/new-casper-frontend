'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDeleteArticleMutation } from '@app/_hooks/apis/boards';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import { ERROR_MESSAGE } from '@app/_constants/message';
import { BoardDetailParams } from '@app/_types/boardTypes';
import { ErrorProps } from '@app/_types/errorTypes';
import { Button } from '@app/_shadcn/components/ui/button';

function Error({ error, reset }: ErrorProps) {
  const { boardType, articleId } = useParams<BoardDetailParams>();
  const { mutate } = useDeleteArticleMutation(Number(articleId));
  const { data: myProfile } = useMyInfo();
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  const deleteArticle = () => {
    mutate();
  };

  if (error.message === ERROR_MESSAGE['-301'])
    return (
      <div className="flex-center h-full w-full flex-col gap-4">
        <h2>과제글은 정회원만 열람가능해요.</h2>
        <Button asChild>
          <Link href={`/boards/${boardType}/list/1`}>목록으로 돌아가기</Link>
        </Button>
      </div>
    );

  return (
    <div className="flex-center h-full w-full flex-col gap-4">
      <h2>글을 불러오는 중 에러가 발생했어요!</h2>
      <div className="flex gap-2">
        <Button onClick={() => reset()}>다시 시도하기</Button>
        {myProfile?.role === 'admin' && (
          <Button variant="destructive" onClick={() => deleteArticle()}>
            삭제
          </Button>
        )}
      </div>
    </div>
  );
}

export default Error;
