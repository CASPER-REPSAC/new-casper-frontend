import { Suspense } from 'react';
import { DefaultLink } from 'app/_components/common';
import { BoardListParams } from 'app/_types/boardTypes';
import { BoardBody, BoardFooter, BoardHeader } from './_components';

function BoardPage({
  params: { boardType, page },
}: {
  params: BoardListParams;
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <BoardHeader />
      <Suspense fallback={<BoardBody.Skeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <BoardBody params={{ boardType, page }} />
      </Suspense>

      <DefaultLink
        className="ml-auto"
        theme="primary"
        href={`/boards/${boardType}/posts`}
      >
        작성 하기
      </DefaultLink>
      {/* @ts-expect-error Async Server Component */}
      <BoardFooter params={{ boardType, page }} />
    </div>
  );
}

export default BoardPage;
