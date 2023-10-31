import styled from 'styled-components';
import PageTitle from '@src/components/common/PageTitle';
import Board from '@src/components/templates/boards/Board';
import PageWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import { PAGE_TITLE } from '@src/utils/constants';
import { GetStaticPaths, GetStaticProps } from 'next';
import { API_URL, ARTICLE_LIST_API } from '@src/utils/apiUrl';
import { OnePageOfArticleList } from '@src/types/articleTypes';
import BoardSideMenu from '@src/components/organism/BoardSideMenu';
import { ParsedUrlQuery } from 'querystring';
import { SsrError } from '@src/types/errorTypes';
import Error from '@src/pages/_error';
import axios from 'axios';
import handleErrorStaticProps from '@src/utils/handleErrorStaticProps';

/**
 *  게시판 메인 페이지
 */

interface Props {
  onePageOfArticleList: OnePageOfArticleList | null;
  error: SsrError | null;
}

function BoardPage({ onePageOfArticleList, error }: Props) {
  if (error) return <Error statusCode={error.statusCode} />;

  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.board} />
      <PageWrapper>
        <BoardSideMenu />
        <Main>
          <Board onePageOfArticleList={onePageOfArticleList} />
        </Main>
      </PageWrapper>
    </>
  );
}

interface PathParams extends ParsedUrlQuery {
  boardType: string;
  page: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const boardTypes = [
    'notice_board',
    'full_member_board',
    'graduate_member_board',
    'associate_member_board',
  ];
  const paths: { params: PathParams }[] = [];

  const maxPages = await Promise.all(
    await boardTypes.map(async (boardType) => {
      const onePageOfArticleListApiUrl = `${API_URL}${ARTICLE_LIST_API}/${boardType}/all/${1}`;
      const { data } = await axios.get<OnePageOfArticleList>(
        onePageOfArticleListApiUrl,
      );
      return Math.floor(data.maxPageNum / 10);
    }),
  );

  boardTypes.forEach((boardType, idx) => {
    const maxPage = maxPages[idx];
    for (let page = 1; page < maxPage + 1; page += 1) {
      paths.push({
        params: {
          boardType,
          page: String(page),
        },
      });
    }
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = handleErrorStaticProps(
  async ({ params }) => {
    const { boardType, page } = params as PathParams;
    const onePageOfArticleListApiUrl = `${API_URL}${ARTICLE_LIST_API}/${boardType}/all/${page}`;
    const { data } = await axios.get<OnePageOfArticleList>(
      onePageOfArticleListApiUrl,
    );

    return { props: { onePageOfArticleList: data }, revalidate: 5 };
  },
);

const Main = styled.div`
  display: flex;
`;

export default BoardPage;
