import { DefaultLink } from 'app/_components/common';
import { getOnePageArticleList } from 'app/_service/article';
import { BoardListParams } from 'app/_types/boardTypes';
import { PATH } from 'app/_constants/urls';
import { BoardBody, BoardFooter, BoardHeader } from './_components';

async function BoardPage({
  params: { boardType, page },
}: {
  params: BoardListParams;
}) {
  const data = await getOnePageArticleList({ boardType, page }, true);

  return (
    <div className="flex w-full flex-col gap-4">
      <BoardHeader />
      <BoardBody articleList={data.articleList} boardType={boardType} />
      <div className="flex justify-end">
        <DefaultLink theme="green" href={PATH.posts.url}>
          작성 하기
        </DefaultLink>
      </div>
      <BoardFooter maxPage={data.maxPageNum} params={{ boardType, page }} />
    </div>
  );
}

export default BoardPage;
