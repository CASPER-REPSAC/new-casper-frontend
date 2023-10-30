import { GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import PageTitle from '@src/components/common/PageTitle';
import CommonCenterWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import BoardSideMenu from '@src/components/organism/BoardSideMenu';
import { API_URL, ARTICLE_DETAIL_API } from '@src/utils/apiUrl';
import { ArticleDetail } from '@src/types/articleTypes';
import { SsrError } from '@src/types/errorTypes';
import DetailTemplate from '@src/components/templates/DetailTemplate';
import Error from '@src/pages/_error';
import handleErrorStaticProps from '@src/utils/handleErrorStaticProps';
/**
 *  글 조회 페이지
 */

interface Props {
  articleDetail: ArticleDetail | null;
  error: SsrError | null;
}

function PostDetail({ articleDetail, error }: Props) {
  if (error) return <Error statusCode={error.statusCode} />;

  return (
    <>
      <PageTitle pageTitle="Boards" />
      <CommonCenterWrapper>
        <BoardSideMenu />
        <Main>
          <DetailTemplate articleDetail={articleDetail} />
        </Main>
      </CommonCenterWrapper>
    </>
  );
}

interface PathParams extends ParsedUrlQuery {
  boardType: string;
  postId: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const boardTypes = [
    'notice_board',
    'full_member_board',
    'graduate_member_board',
    'associate_member_board',
  ];
  const paths: { params: PathParams }[] = [];

  boardTypes.forEach((boardType) => {
    const maxPage = 30; // 임시
    for (let page = 1; page < maxPage + 1; page += 1) {
      paths.push({
        params: {
          boardType,
          postId: String(page),
        },
      });
    }
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = handleErrorStaticProps(
  async ({ params }) => {
    const { postId } = params as PathParams;
    const { data } = await axios.get<ArticleDetail>(
      `${API_URL}${ARTICLE_DETAIL_API}/${postId}`,
    );

    return { props: { articleDetail: data } };
  },
);

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
`;

export default PostDetail;
