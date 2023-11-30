import { BoardType } from '@src/types/boardTypes';
import Error from '@src/pages/_error';
import { BoardLayout } from '@src/components/organism/layout';
import { ReactElement } from 'react';
import { BOARD_TYPE } from 'app/_constants/mock';
import { BoardTemplate } from '@src/components/templates';
import {
  BoardBody,
  BoardFooter,
  BoardHeader,
} from '@src/components/organism/board';
import useOnePageArticleList, {
  getOnePageArticleList,
} from 'app/_hooks/apis/boards/useOnePageArticleList';
import { LinkButton } from '@src/components/common/featureTag';
import { PATH } from 'app/_constants/urls';
import { useBoardPermission } from 'app/_hooks';

export async function generateStaticParams() {
  const boardTypes = Object.values(BOARD_TYPE);

  const params = await Promise.all(
    boardTypes.map(async (boardType) => {
      const { maxPageNum } = await getOnePageArticleList(
        { boardType, page: '1' },
        true,
      );
      const pageList = Array.from({ length: maxPageNum }, (_, idx) => idx + 1);
      return pageList.map((page) => ({
        boardType,
        page: String(page),
      }));
    }),
  );

  return params;
}

function BoardPage({
  params: { boardType, page },
}: {
  params: { boardType: BoardType; page: string };
}) {
  const permission = useBoardPermission(boardType);
  const { data } = useOnePageArticleList({ boardType, page });

  if (!permission.read) return <>접근 권한이 없어요!</>;
  if (!data) return <Error statusCode={-1} />;

  return (
    <BoardTemplate
      headerSection={<BoardHeader />}
      bodySection={<BoardBody boardType={boardType} page={page} />}
      buttonSection={
        <LinkButton $color="green" $size="medium" href={PATH.posts.url}>
          작성 하기
        </LinkButton>
      }
      footerSection={
        <BoardFooter maxPage={data.maxPageNum} curPage={Number(page)} />
      }
    />
  );
}

BoardPage.getLayout = (page: ReactElement) => {
  return <BoardLayout>{page}</BoardLayout>;
};

export default BoardPage;
