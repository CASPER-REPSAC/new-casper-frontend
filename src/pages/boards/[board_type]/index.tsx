import styled from 'styled-components';
import PageTitle from '@src/components/common/PageTitle';
import SideBar from '@src/components/common/SideMenu';
import Board from '@src/components/templates/boards/Board';
import PageWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import { PATH } from '@src/utils/urls';
import { PAGE_TITLE } from '@src/utils/constants';
import { GetStaticPaths, GetStaticProps } from 'next';

/**
 *  게시판 메인 페이지
 */

function BoardPage() {
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

export const getStaticPaths: GetStaticPaths = () => {
  const boardTypes = [
    'notice_board',
    'full_member_board',
    'graduate_member_board',
    'associate_member_board',
  ];

  const paths = boardTypes.map((boardType) => ({
    params: { board_type: boardType },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async () => {
  // const bordType = params?.board_type;
  // const res = await axios.get(`http://build.casper.or.kr${ARTICLE_LIST_API}/0`);
  return { props: {} };
};

const Main = styled.div`
  display: flex;
`;

export default BoardPage;
