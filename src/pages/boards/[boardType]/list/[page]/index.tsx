import Board from '@src/components/templates/boards/Board';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { API_URL, ARTICLE_LIST_API } from '@src/constants/apiUrl';
import { OnePageOfArticleList } from '@src/types/articleTypes';
import { ParsedUrlQuery } from 'querystring';
import Error from '@src/pages/_error';
import BoardLayout from '@src/components/organism/layout/BoardLayout';
import { ReactElement } from 'react';
import customAxios from '@src/utils/customAxios';
import { BOARD_TYPE } from '@src/constants/mock';

/**
 *  게시판 메인 페이지
 */

interface Params extends ParsedUrlQuery {
  boardType: string;
  page: string;
}

export const getStaticPaths = (async () => {
  const boardTypes = Object.values(BOARD_TYPE);
  const paths: { params: Params }[] = [];

  const PromiseMaxPages = boardTypes.map(async (boardType) => {
    const { data } = await customAxios<OnePageOfArticleList>({
      method: 'GET',
      url: `${API_URL}${ARTICLE_LIST_API}/${boardType}/all/1`,
    });

    if (!data) {
      return 0;
    }

    return data.maxPageNum;
  });
  const maxPages = await Promise.all(PromiseMaxPages);

  boardTypes.forEach((boardType, idx) => {
    const maxPage = maxPages[idx];
    for (let page = 1; page < maxPage + 1; page += 1) {
      const params = {
        boardType,
        page: String(page),
      };
      paths.push({ params });
    }
  });

  return { paths, fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const params = context.params!;
  const { boardType, page } = params;

  const onePageOfArticleListApiUrl = `${API_URL}${ARTICLE_LIST_API}/${boardType}/all/${page}`;
  const { data, error } = await customAxios<OnePageOfArticleList>({
    url: onePageOfArticleListApiUrl,
  });

  if (!data) {
    return {
      props: { data: null, error },
      notFound: true,
    };
  }

  return { props: { data, error }, revalidate: 3 };
}) satisfies GetStaticProps<{
  data: OnePageOfArticleList;
}>;

function BoardPage({
  data: onePageOfArticleList,
  error,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (error) return <Error statusCode={error.statusCode} />;

  return <Board onePageOfArticleList={onePageOfArticleList} />;
}

BoardPage.getLayout = (page: ReactElement) => {
  return <BoardLayout>{page}</BoardLayout>;
};

export default BoardPage;
