import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { CommonCenterWrapper } from '../common/centerWrapper';

interface Props {
  backgroundImg: string;
  noticeSection: ReactNode;
  titleSection: ReactNode;
  pageSection: ReactNode;
}

function HomeTemplate({
  backgroundImg,
  noticeSection,
  titleSection,
  pageSection,
}: Props) {
  return (
    <Wrapper>
      <Background src={backgroundImg} />
      <Body>
        <NoticeSection>{noticeSection}</NoticeSection>
        <TitleSection>{titleSection}</TitleSection>
        <PageSection>{pageSection}</PageSection>
      </Body>
    </Wrapper>
  );
}
const Background = styled.img`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  filter: brightness(50%);
  z-index: -1;
  object-fit: cover;
`;

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
