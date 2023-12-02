import { DefaultLink } from 'app/_components/common';
import { getOnePageArticleList } from 'app/_service/article';
import { BoardListParams } from 'app/_types/boardTypes';
import { PATH } from 'app/_constants/urls';
import {
  BoardBody,
  BoardFooter,
  BoardHeader,
  PageTemplate,
} from './_components';

async function BoardPage({
  params: { boardType, page },
}: {
  params: BoardListParams;
}) {
  const data = await getOnePageArticleList({ boardType, page }, true);

  return (
    <>
      <PageTemplate
        headerSection={<BoardHeader />}
        bodySection={
          <BoardBody articleList={data.articleList} boardType={boardType} />
        }
        buttonSection={
          <DefaultLink theme="green" href={PATH.posts.url}>
            작성 하기
          </DefaultLink>
        }
        footerSection={
          <BoardFooter
            maxPage={data.maxPageNum}
            curPage={Number(page)}
            params={{ boardType, page }}
          />
        }
      />
    </>
  );
}

export default BoardPage;
