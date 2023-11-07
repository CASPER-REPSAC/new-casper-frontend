import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { API_URL, ARTICLE_DETAIL_API } from '@src/constants/apiUrl';
import { ArticleDetail } from '@src/types/articleTypes';
import { SsrError } from '@src/types/errorTypes';
import DetailTemplate from '@src/components/templates/boards/DetailTemplate';
import Error from '@src/pages/_error';
import BoardLayout from '@src/components/utilComponents/Layout/BoardLayout';
import { ReactElement } from 'react';
import customAxios from '@src/utils/api';

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

interface Params extends ParsedUrlQuery {
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
  const paths: { params: Params }[] = [];

  boardTypes.forEach((boardType) => {
    const maxPage = 10; // 임시
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

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const params = context.params!;
  const { postId } = params;
  const { data, error } = await customAxios<ArticleDetail>({
    url: `${API_URL}${ARTICLE_DETAIL_API}/${postId}`,
  });

  return { props: { articleDetail: data, error } };
};
