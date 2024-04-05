import { BoardListParams } from '@app/_types/boardTypes';
import { getOnePageArticleList } from '@app/_service/article';
import { BoardBody, BoardFooter, BoardHeader, PostLink } from './_components';

async function BoardPage({
  params: { boardType, page },
}: {
  params: BoardListParams;
}) {
  const { maxPageNum: maxPage, articleList } = await getOnePageArticleList({
    boardType,
    page,
  });

  return (
    <div className="flex w-full flex-col gap-4">
      <BoardHeader />
      <BoardBody articleList={articleList} />
      <PostLink params={{ boardType, page }} />
      <BoardFooter maxPage={maxPage} params={{ boardType, page }} />
    </div>
  );
}

export default BoardPage;
