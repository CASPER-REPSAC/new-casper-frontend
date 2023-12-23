import { BoardListParams } from 'app/_types/boardTypes';
import { getOnePageArticleList } from 'app/_service/article';
import { getAccessToken } from 'app/_utils/cookie';
import PageList from './PageList';

interface Props {
  params: BoardListParams;
}

async function BoardFooter({ params: { boardType, page: curPage } }: Props) {
  const accessToken = getAccessToken();
  const { maxPageNum: maxPage } = await getOnePageArticleList(
    {
      boardType,
      page: curPage,
    },
    accessToken,
  );

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
