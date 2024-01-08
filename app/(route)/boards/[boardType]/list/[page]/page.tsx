import { Suspense } from 'react';
import { BoardListParams } from '@app/_types/boardTypes';
import { BoardBody, BoardFooter, BoardHeader, PostLink } from './_components';

function BoardPage({
  params: { boardType, page },
}: {
  params: BoardListParams;
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <BoardHeader />
      <Suspense fallback={<BoardBody.Skeleton />}>
        <BoardBody params={{ boardType, page }} />
      </Suspense>

      <PostLink params={{ boardType, page }} />
      <BoardFooter params={{ boardType, page }} />
    </div>
  );
}

export default BoardPage;
