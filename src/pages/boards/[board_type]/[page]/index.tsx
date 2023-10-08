/* eslint-disable @typescript-eslint/naming-convention */

import styled from 'styled-components';
import PageTitle from '@src/components/common/PageTitle';
import SideBar from '@src/components/common/SideMenu';
import Board from '@src/components/templates/boards/Board';
import PageWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import { PATH } from '@src/utils/urls';
import { PAGE_TITLE } from '@src/utils/constants';
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { API_URL, ARTICLE_LIST_API } from '@src/utils/apiUrl';
import { ParsedUrlQuery } from 'querystring';

/**
 *  게시판 메인 페이지
 */

interface articleData {
  file: boolean;
  title: string;
  createdAt: string;
  articleId: number;
  view: number;
  hide: boolean;
  numOfComments: number;
  nickname: string;
}

interface Props {
  articleList: articleData[];
}

function BoardPage({ articleList }: Props) {
  // eslint-disable-next-line no-console
  console.log(articleList);
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

export const getStaticPaths: GetStaticPaths = async () => {
  const boardTypes = [
    'notice_board',
    'full_member_board',
    'graduate_member_board',
    'associate_member_board',
  ];

  // todo max page api 호출
  const maxPage = 7;
  const paths: (
    | string
    | {
        params: ParsedUrlQuery;
        locale?: string | undefined;
      }
  )[] = [];
  boardTypes.forEach((boardType) => {
    for (let i = 0; i < maxPage; i += 1) {
      const params = { board_type: boardType, page: String(i) };
      paths.push({ params });
    }
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const bordType = params?.board_type;
  const page = params?.page;

  const res = await axios.get(
    `${API_URL}${ARTICLE_LIST_API}/${bordType}/all/${page}`,
  );
  const { data: articleList } = res;
  return { props: { articleList } };
};

const Main = styled.div`
  display: flex;
`;

export default BoardPage;

/**
 * 
 * 
  paths: [
    {
      params: {
        board_type: 'notice',
        page: 1
      },
    },
    {
      params: {
        board_type: 'notice',
        page: 2
      },
    },
  ],

 */
