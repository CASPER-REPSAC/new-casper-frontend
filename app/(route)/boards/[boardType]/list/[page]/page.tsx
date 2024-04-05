import { BoardListParams } from '@app/_types/boardTypes';
import { getOnePageArticleList } from '@app/_service/article';
import { BoardBody, BoardHeader, PostLink } from './_components';

interface Props {
  params: BoardListParams;
  searchParams: { category: string };
}

async function BoardPage({
  params: { boardType, page },
  searchParams: { category },
}: Props) {
  const { maxPageNum: maxPage, articleList } = await getOnePageArticleList({
    boardType,
    page,
    category,
  });

  return (
    <div className="flex w-full flex-col gap-4">
      <BoardHeader params={{ boardType, page }} />
      <BoardBody articleList={articleList} maxPage={maxPage} />
      <PostLink params={{ boardType, page }} />
    </div>
  );
}

export default BoardPage;
