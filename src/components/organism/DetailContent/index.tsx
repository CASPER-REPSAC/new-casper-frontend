import { styled } from 'styled-components';
import DefaultButton from '@src/components/common/DefaultButton';
import DraftView from '@src/components/molecules/Editor/DraftView';
import useDeleteArticleMutation from '@src/hooks/apis/boards/useDeleteArticleMutation';
import { ArticleDetail } from '@src/types/articleTypes';
import TitleSection from './TitleSection';
import AuthorSection from './AuthorSection';

interface Props {
  articleDetail: ArticleDetail | null;
}

function DetailContent({ articleDetail }: Props) {
  const { mutate: mutateDeletion } = useDeleteArticleMutation(articleDetail);

  const deleteArticle = () => {
    if (!articleDetail?.articleId) return;
    mutateDeletion();
  };

  return (
    <Wrapper>
      {articleDetail && (
        <>
          <TitleSection
            title={articleDetail.title}
            buttons={
              <>
                <DefaultButton size="small">수정</DefaultButton>
                <DefaultButton color="red" size="small" onClick={deleteArticle}>
                  삭제
                </DefaultButton>
              </>
            }
          />

          <DraftView content={articleDetail.content} />
          <AuthorSection nickname={articleDetail.nickname} />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

export default DetailContent;
