import { ReactElement, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { API_URL, ARTICLE_DETAIL_API } from '@src/constants/apiUrl';
import { ArticleDetail } from '@src/types/articleTypes';
import DetailTemplate from '@src/components/templates/boards/DetailTemplate';
import BoardLayout from '@src/components/organism/layout/BoardLayout';
import useDeleteArticleMutation from '@src/hooks/apis/boards/useDeleteArticleMutation';
import useUpdateArticleMutation from '@src/hooks/apis/boards/useUpdateArticleMutation';
import customAxios from '@src/utils/api';
import { UpdateReqData } from '@src/types/PostTypes';
import { SsrError } from '@src/types/errorTypes';
import { BOARD_TYPE } from '@src/constants/mock';
import Error from '@src/pages/_error';
import {
  ButtonSection,
  ContentSection,
  TitleSection,
} from '@src/components/organism/detailArticle/DetailContent';
import DetailComment from '@src/components/organism/detailArticle/DetailComment';

interface Props {
  articleDetail: ArticleDetail | null;
  error: SsrError | null;
}
interface Params extends ParsedUrlQuery {
  boardType: string;
  postId: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const boardTypes = Object.values(BOARD_TYPE);
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

export const getStaticProps = (async (context) => {
  const params = context.params!;
  const { postId } = params;

  const { data, error } = await customAxios<ArticleDetail>({
    url: `${API_URL}${ARTICLE_DETAIL_API}/${postId}`,
  });

  return { props: { articleDetail: data, error } };
}) satisfies GetStaticProps<Props, Params>;

export default function PostDetail({ articleDetail, error }: Props) {
  const [editable, setEditable] = useState(false);
  const { mutate: mutateDeletion } = useDeleteArticleMutation(articleDetail);
  const { mutate: mutateUpdate } = useUpdateArticleMutation(
    articleDetail?.articleId,
  );
  const methods = useForm<UpdateReqData>({
    defaultValues: {
      title: articleDetail?.title,
      content: articleDetail?.content,
    },
  });

  const deleteArticle = () => {
    if (!articleDetail?.articleId) return;
    mutateDeletion();
  };
  const changeEditMode = () => {
    setEditable(true);
  };
  const completeModification = () => {
    mutateUpdate({
      title: methods.getValues('title'),
      content: methods.getValues('content'),
    });
    setEditable(false);
  };

  if (error) return <Error statusCode={error.statusCode} />;
  if (!articleDetail) return <DetailTemplate />;

  return (
    <DetailTemplate
      titleSection={<TitleSection title={articleDetail.title} />}
      titleButtonSection={
        <ButtonSection
          editable={editable}
          deleteArticle={deleteArticle}
          changeEditMode={changeEditMode}
          completeModification={completeModification}
        />
      }
      contentSection={
        <FormProvider {...methods}>
          <ContentSection editable={editable} content={articleDetail.content} />
        </FormProvider>
      }
      commentSection={<DetailComment />}
    />
  );
}

PostDetail.getLayout = function getLayout(page: ReactElement) {
  return <BoardLayout>{page}</BoardLayout>;
};
