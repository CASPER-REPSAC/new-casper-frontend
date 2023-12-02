import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  titleSection?: ReactNode;
  titleButtonSection?: ReactNode;
  contentSection?: ReactNode;
  commentSection?: ReactNode;
  authorSection?: ReactNode;
  commentEditorSection?: ReactNode;
}

function PageTemplate({
  contentSection,
  titleSection,
  titleButtonSection,
  commentEditorSection,
  authorSection,
  commentSection,
}: Props) {
  return (
    <div>
      <TitleSection>
        <Title>{titleSection}</Title>
        <Buttons>{titleButtonSection}</Buttons>
      </TitleSection>
      <ContentSection>{contentSection}</ContentSection>
      <AuthorSection>{authorSection}</AuthorSection>
      <CommentEditorSection>
        <SectionTitle>댓글</SectionTitle>
        {commentEditorSection}
      </CommentEditorSection>
      <CommentSection>{commentSection}</CommentSection>
    </div>
  );
}

const ContentSection = styled.section`
  min-height: 300px;
  margin-bottom: 5rem;
`;
const TitleSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  margin-bottom: 1rem;
`;
const Title = styled.div``;
const SectionTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;
const CommentEditorSection = styled.section`
  margin-bottom: 5rem;
`;
const CommentSection = styled.section``;
const AuthorSection = styled.section`
  margin-bottom: 10rem;
`;

export default PageTemplate;
