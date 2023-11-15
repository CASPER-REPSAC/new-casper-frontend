import Board from '@src/components/templates/boards/Board';
import { GetStaticPaths, GetStaticProps } from 'next';
import { API_URL, ARTICLE_LIST_API } from '@src/constants/apiUrl';
import { OnePageOfArticleList } from '@src/types/articleTypes';
import { ParsedUrlQuery } from 'querystring';
import { SsrError } from '@src/types/errorTypes';
import Error from '@src/pages/_error';
import axios from 'axios';
import BoardLayout from '@src/components/utilComponents/Layout/BoardLayout';
import { ReactElement } from 'react';
import customAxios from '@src/utils/api';
import { BOARD_TYPE } from '@src/constants/mock';

/**
 *  게시판 메인 페이지
 */

interface Props {
  onePageOfArticleList: OnePageOfArticleList | null;
  error: SsrError | null;
}

function BoardPage({ onePageOfArticleList, error }: Props) {
  if (error) return <Error statusCode={error.statusCode} />;

  return <Board onePageOfArticleList={onePageOfArticleList} />;
}

BoardPage.getLayout = (page: ReactElement) => {
  return <BoardLayout>{page}</BoardLayout>;
};

interface Params extends ParsedUrlQuery {
  boardType: string;
  page: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const boardTypes = Object.values(BOARD_TYPE);
  const paths: { params: Params }[] = [];

  const maxPages = await Promise.all(
    await boardTypes.map(async (boardType) => {
      const onePageOfArticleListApiUrl = `${API_URL}${ARTICLE_LIST_API}/${boardType}/all/1`;

      const { data } = await axios.get<OnePageOfArticleList>(
        onePageOfArticleListApiUrl,
      );
      console.log(data);
      return Math.floor(data.maxPageNum);
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

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const params = context.params!;
  const { boardType, page } = params;
  const onePageOfArticleListApiUrl = `${API_URL}${ARTICLE_LIST_API}/${boardType}/all/${page}`;
  const { data, error } = await customAxios<OnePageOfArticleList>({
    url: onePageOfArticleListApiUrl,
  });

  return { props: { onePageOfArticleList: data, error }, revalidate: 3 };
};

export default BoardPage;
