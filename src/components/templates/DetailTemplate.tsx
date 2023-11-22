import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  titleSection?: ReactNode;
  titleButtonSection?: ReactNode;
  contentSection?: ReactNode;
  commentSection?: ReactNode;
}

function DetailTemplate({
  contentSection,
  titleSection,
  titleButtonSection,
  commentSection,
}: Props) {
  return (
    <Wrapper>
      <TitleSection>
        <Title>{titleSection}</Title>
        <Buttons>{titleButtonSection}</Buttons>
      </TitleSection>
      <ContentSection>{contentSection}</ContentSection>
      <Hr />
      <CommentSection>{commentSection}</CommentSection>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const ContentSection = styled.section`
  min-height: 300px;
`;
const TitleSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  margin-bottom: 1rem;
`;
const Title = styled.div``;
const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;
const CommentSection = styled.section``;
const Hr = styled.hr`
  background: ${({ theme }) => theme.borderDefault};
  border: 0;
  width: 100%;
  height: 1px;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;
export default DetailTemplate;
