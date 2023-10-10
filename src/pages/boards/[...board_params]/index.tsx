import styled from 'styled-components';
import PageTitle from '@src/components/common/PageTitle';
import SideBar from '@src/components/common/SideMenu';
import Board from '@src/components/templates/boards/Board';
import PageWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import { PATH } from '@src/utils/urls';
import { PAGE_TITLE } from '@src/utils/constants';
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { ARTICLE_LIST_API } from '@src/utils/apiUrl';
import { ArticleData } from '@src/types/articleTypes';

/**
 *  게시판 메인 페이지
 */

interface Props {
  articleList: ArticleData[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BoardPage({ articleList }: Props) {
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.board} />
      <PageWrapper>
        <SideBar menus={PATH.boards} />
        <Main>
          <Board articleList={articleList} />
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

  const paths: {
    params: { [key: string]: string[] };
  }[] = [];

  boardTypes.forEach((boardType) => {
    const maxPage = 5; // 임시
    for (let page = 1; page < maxPage + 1; page += 1) {
      paths.push({
        params: {
          board_params: [boardType, String(page)],
        },
      });
    }
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const boardParmas = params?.board_params;

  if (
    !boardParmas ||
    typeof boardParmas === 'string' ||
    boardParmas.length < 1
  ) {
    return { props: { articleList: null } };
  }

  const [boardType, page] = boardParmas;
  const res = await axios.get(
    `http://build.casper.or.kr${ARTICLE_LIST_API}/${boardType}/all/${page}`,
  );
  const { data: articleList } = res;
  return { props: { articleList } };
};

const Main = styled.div`
  display: flex;
`;

export default BoardPage;
