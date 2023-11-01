import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { API_URL, ARTICLE_DETAIL_API } from '@src/utils/apiUrl';
import { ArticleDetail } from '@src/types/articleTypes';
import { SsrError } from '@src/types/errorTypes';
import DetailTemplate from '@src/components/templates/boards/DetailTemplate';
import Error from '@src/pages/_error';
import handleErrorStaticProps from '@src/utils/handleErrorStaticProps';
import BoardLayout from '@src/components/Layout/BoardLayout';
import { ReactElement } from 'react';

interface Props {
  articleDetail: ArticleDetail | null;
  error: SsrError | null;
}

export default function PostDetail({ articleDetail, error }: Props) {
  if (error) return <Error statusCode={error.statusCode} />;

  return <DetailTemplate articleDetail={articleDetail} />;
}

PostDetail.getLayout = function getLayout(page: ReactElement) {
  return <BoardLayout>{page}</BoardLayout>;
};

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
