import styled from 'styled-components';
import PageTitle from '@src/components/common/PageTitle';
import Board from '@src/components/templates/boards/Board';
import PageWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import { PAGE_TITLE } from '@src/utils/constants';
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { ARTICLE_LIST_API } from '@src/utils/apiUrl';
import { ArticleData } from '@src/types/articleTypes';
import BoardSideMenu from '@src/components/organism/BoardSideMenu';
import { ParsedUrlQuery } from 'querystring';

/**
 *  게시판 메인 페이지
 */

interface Props {
  articleList: ArticleData[] | null;
}

function BoardPage({ articleList }: Props) {
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.board} />
      <PageWrapper>
        <BoardSideMenu />
        <Main>
          <Board articleList={articleList} />
        </Main>
      </PageWrapper>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
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

interface IParams extends ParsedUrlQuery {
  board_params: string[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { board_params: boardParams } = params as IParams;
  const [boardType, page] = boardParams;
  let articleList: ArticleData | null;

  try {
    const res = await axios.get(
      `http://build.casper.or.kr${ARTICLE_LIST_API}/${boardType}/all/${page}`,
    );
    articleList = res.data;
  } catch (e) {
    articleList = null;
    throw e;
  }

  return { props: { articleList } };
};

const Main = styled.div`
  display: flex;
`;

export default BoardPage;
