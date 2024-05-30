import { BoardListParams } from '@app/_types/boardTypes';
import { getOnePageArticleList } from '@app/_service/article';
import PageNav from './_components/PageNav';
import BoardHeader from './_components/BoardHeader';
import BoardBody from './_components/BoardBody';
import PostLink from './_components/PostLink';

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
      <BoardBody articleList={articleList} />
      <PageNav maxPage={maxPage} />
      <PostLink />
    </div>
  );
}

export default BoardPage;
