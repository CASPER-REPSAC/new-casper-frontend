import DraftView from '@src/components/molecules/Editor/DraftView';
import { ArticleDetail } from '@src/types/articleTypes';
import { styled } from 'styled-components';

interface Props {
  articleDetail: ArticleDetail | null;
}

function DetailContent({ articleDetail }: Props) {
  return (
    <Wrapper>
      {articleDetail && (
        <>
          <Title>{articleDetail.title}</Title>
          <DraftView content={articleDetail.content} />
          <AuthorInfo>
            <Avatar />
            <Info>
              <AuthorName>{articleDetail.nickname}</AuthorName>
              <Desc>소개글</Desc>
            </Info>
          </AuthorInfo>
        </>
      )}
    </Wrapper>
  );
}

export default DetailContent;

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 600%;
`;
const AuthorInfo = styled.div`
  display: flex;
  margin-top: 200px;
  align-items: center;
`;
const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.borderDefault};
  margin-right: 50px;
`;
const Info = styled.div`
  display: flex;

  flex-direction: column;
`;
const AuthorName = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 0.5em;
`;
const Desc = styled.div`
  font-size: 2rem;
`;
