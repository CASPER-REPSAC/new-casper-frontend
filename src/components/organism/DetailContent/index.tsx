import '@blocknote/core/style.css';
import { useState } from 'react';
import { styled } from 'styled-components';
import DefaultButton from '@src/components/common/DefaultButton';
import { ArticleDetail } from '@src/types/articleTypes';
import { FormProvider, useForm } from 'react-hook-form';
import useDeleteArticleMutation from '@src/hooks/apis/boards/useDeleteArticleMutation';
import useUpdateArticleMutation from '@src/hooks/apis/boards/useUpdateArticleMutation';
import { UpdateReqData } from '@src/types/PostTypes';
import TitleSection from './TitleSection';
import AuthorSection from './AuthorSection';
import ContentSection from './ContentSection';

interface Props {
  articleDetail: ArticleDetail;
}

function DetailContent({ articleDetail }: Props) {
  console.log('DetailContent');
  const [editable, setEditable] = useState(false);
  const methods = useForm<UpdateReqData>({
    defaultValues: {
      title: articleDetail.title,
      content: articleDetail.content,
    },
  });
  const { mutate: mutateDeletion } = useDeleteArticleMutation(articleDetail);
  const { mutate: mutateUpdate } = useUpdateArticleMutation(
    articleDetail.articleId,
  );

  const deleteArticle = () => {
    if (!articleDetail?.articleId) return;
    mutateDeletion();
  };

  const modifyArticle = () => {
    setEditable(true);
  };
  const completeModification = () => {
    mutateUpdate({
      title: methods.getValues('title'),
      content: methods.getValues('content'),
    });
    setEditable(false);
  };

  return (
    <Wrapper>
      <TitleSection
        title={articleDetail.title}
        buttons={
          <>
            {editable ? (
              <DefaultButton size="small" onClick={completeModification}>
                완료
              </DefaultButton>
            ) : (
              <DefaultButton size="small" onClick={modifyArticle}>
                수정
              </DefaultButton>
            )}

            <DefaultButton color="red" size="small" onClick={deleteArticle}>
              삭제
            </DefaultButton>
          </>
        }
      />
      <FormProvider {...methods}>
        <ContentSection content={articleDetail.content} editable={editable} />
      </FormProvider>
      <AuthorSection nickname={articleDetail.nickname} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export default DetailContent;
