import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { CommonCenterWrapper } from '../common/centerWrapper';

interface Props {
  backgroundSection: ReactNode;
  noticeSection: ReactNode;
  titleSection: ReactNode;
  pageSection: ReactNode;
}

function HomeTemplate({
  backgroundSection,
  noticeSection,
  titleSection,
  pageSection,
}: Props) {
  return (
    <Wrapper>
      {backgroundSection}
      <Body>
        <NoticeSection>{noticeSection}</NoticeSection>
        <TitleSection>{titleSection}</TitleSection>
        <PageSection>{pageSection}</PageSection>
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const NoticeSection = styled.div``;
const TitleSection = styled.div``;
const PageSection = styled.div``;

const Body = styled(CommonCenterWrapper)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10vh;
  color: white;
  margin-top: 15vh;
`;

export default HomeTemplate;
