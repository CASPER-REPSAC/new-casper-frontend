import { ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { DetailTemplate } from '@src/components/templates';
import { BoardLayout } from '@src/components/organism/layout';
import {
  ButtonSection,
  ContentSection,
  TitleSection,
  DetailComment,
  AuthorSection,
  CommentEditorSection,
} from '@src/components/organism/detail';
import useArticleDetail, {
  getArticleDetail,
} from 'app/_hooks/apis/boards/useArticleDetail';
import { ArticleDetail, BoardType } from 'app/_types/boardTypes';
import { UpdateReqData } from 'app/_types/PostTypes';
import { BOARD_TYPE } from 'app/_constants/mock';
import { isBoardType } from '@src/utils/typeGuard';

interface Props {
  initialData: ArticleDetail;
  articleId: string;
  boardType: BoardType;
}
interface Params extends ParsedUrlQuery {
  boardType: string;
  articleId: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const boardTypes = Object.values(BOARD_TYPE);
  const paths: { params: Params }[] = [];

  boardTypes.forEach((boardType) => {
    const maxPage = 0; // 임시
    for (let page = 1; page < maxPage + 1; page += 1) {
      const params = {
        boardType,
        articleId: String(page),
      };
      paths.push({ params });
    }
  });

  return { paths, fallback: true };
};

export const getStaticProps = (async (context) => {
  const params = context.params!;
  const { articleId, boardType } = params;
  const data = await getArticleDetail(articleId, true);

  const boardTypeValid =
    typeof boardType === 'string' && isBoardType(boardType);
  if (!boardTypeValid)
    return {
      notFound: true,
    };

  return { props: { initialData: data, articleId, boardType } };
}) satisfies GetStaticProps<Props, Params>;

export default function ArticleDetailPage({
  initialData,
  articleId,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: articleDetail } = useArticleDetail(articleId, initialData);
  const methods = useForm<UpdateReqData>({
    defaultValues: {
      title: articleDetail?.title,
      content: articleDetail?.content,
    },
  });

  if (!articleDetail) return <DetailTemplate />;

  return (
    <FormProvider {...methods}>
      <DetailTemplate
        titleSection={<TitleSection articleId={articleId} />}
        titleButtonSection={<ButtonSection articleId={articleId} />}
        contentSection={<ContentSection articleId={articleId} />}
        authorSection={<AuthorSection articleId={articleId} />}
        commentEditorSection={<CommentEditorSection />}
        commentSection={<DetailComment />}
      />
    </FormProvider>
  );
}

ArticleDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <BoardLayout>{page}</BoardLayout>;
};
