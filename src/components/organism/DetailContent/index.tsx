import '@blocknote/core/style.css';
import { styled } from 'styled-components';
import DefaultButton from '@src/components/common/DefaultButton';
import { ParsedArticleDetail } from '@src/types/articleTypes';
import useDeleteArticleMutation from '@src/hooks/apis/boards/useDeleteArticleMutation';
import TitleSection from './TitleSection';
import AuthorSection from './AuthorSection';
import ContentSection from './ContentSection';

interface Props {
  articleDetail: ParsedArticleDetail | null;
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
          <ContentSection content={articleDetail.content} />
          <AuthorSection nickname={articleDetail.nickname} />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export default DetailContent;
