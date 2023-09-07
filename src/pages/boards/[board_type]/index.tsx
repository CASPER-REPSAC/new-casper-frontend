import { useRouter } from 'next/router';
import styled from 'styled-components';
import Custom404 from '@src/pages/Error/404';
import PageTitle from '@src/components/common/PageTitle';
import SideBar from '@src/components/common/SideMenu';
import Board from '@src/components/pages/boards/Board';
import PageWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import { PATH } from '@src/utils/urls';
import { PAGE_TITLE } from '@src/utils/constants';

/**
 *  게시판 메인 페이지
 */

function BoardPage() {
  const router = useRouter();
  const {
    asPath,
    query: { board_type: boardType },
  } = router;

  const safeBoardType = Array.isArray(boardType) ? boardType[0] : boardType;
  const validBoradPathList = Object.values(PATH.boards).map(
    (board) => board.url,
  );
  const isValidPath = !safeBoardType || !validBoradPathList.includes(asPath);

  if (isValidPath) return <Custom404 />;
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.board} />
      <PageWrapper>
        <SideBar menus={PATH.boards} />
        <Main>
          <Board />
        </Main>
      </PageWrapper>
    </>
  );
}

const Main = styled.div`
  display: flex;
`;

export default BoardPage;
