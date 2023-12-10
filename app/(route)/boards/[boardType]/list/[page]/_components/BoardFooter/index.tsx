import { BoardListParams } from 'app/_types/boardTypes';
import { getOnePageArticleList } from 'app/_service/article';
import PageList from './PageList';

interface Props {
  params: BoardListParams;
}

async function BoardFooter({ params: { boardType, page: curPage } }: Props) {
  const { maxPageNum: maxPage } = await getOnePageArticleList({
    boardType,
    page: curPage,
  });

  return (
    <div className="flex-center gap-4">
      <PageList
        maxPage={maxPage}
        curPage={Number(curPage)}
        boardType={boardType}
      />
    </div>
  );
}

export default BoardFooter;
