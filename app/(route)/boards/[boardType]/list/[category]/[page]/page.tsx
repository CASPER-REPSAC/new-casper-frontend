import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { articleListQueryOption } from '@app/_hooks/apis/boards/useArticleListQuery';
import { BoardListParams } from '@app/_types/boardTypes';
import BoardBody from './_components/BoardBody';
import BoardHeader from './_components/BoardHeader';
import PageNav from './_components/PageNav';
import PostLink from './_components/PostLink';

interface Props {
  params: BoardListParams;
}

async function BoardPage({ params: { boardType, page, category } }: Props) {
  const queryClient = new QueryClient();
  const options = articleListQueryOption({
    page: Number(page),
    boardType,
    category,
  });
  await queryClient.prefetchQuery(options);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex w-full flex-col gap-4">
        <BoardHeader params={{ boardType, category, page }} />
        <BoardBody />
        <PageNav />
        <PostLink />
      </div>
    </HydrationBoundary>
  );
}

export default BoardPage;
