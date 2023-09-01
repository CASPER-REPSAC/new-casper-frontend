import { useState } from 'react';
import styled from 'styled-components';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { HiLightBulb } from 'react-icons/hi';

export default function Home() {
  const [page, setPage] = useState(0);
  const bgImgs = ['background1.jpg', 'background2.jpg'];
  const maxPage = bgImgs.length;

  const showNextPage = () => {
    setPage((curPage) => {
      return curPage >= maxPage - 1 ? maxPage - 1 : curPage + 1;
    });
  };
  const showPrevPage = () => {
    setPage((curPage) => {
      return curPage >= 0 ? 0 : curPage - 1;
    });
  };
  const PageBar = bgImgs.map((_, idx) => (
    <CurPageBar key={idx}>{page === idx ? <White /> : null}</CurPageBar>
  ));

  return (
    <>
      <Background src={bgImgs[page]} />
      <Body>
        <Notice>
          <HiLightBulb size={40} color="yellow" />
          신입생 모집 기간입니다.
        </Notice>
        <Title>
          <H1>THE CENTER OF SECURITY</H1>
          <H2>정보 보안 동아리 CASPER</H2>
        </Title>
        <PageInfoWrapper>
          <Page>
            <CurPage>{page + 1}</CurPage>
            <MaxPage>/{maxPage}</MaxPage>
          </Page>
          <PageBarWapper>
            <PageBarBackground>{PageBar}</PageBarBackground>
            <LeftButton onClick={showPrevPage}>
              <MdArrowBackIos size={25} />
            </LeftButton>
            <RightButton onClick={showNextPage}>
              <MdArrowForwardIos size={25} />
            </RightButton>
          </PageBarWapper>
        </PageInfoWrapper>
      </Body>
    </>
  );
}

export const Background = styled.img`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  filter: brightness(50%);
  z-index: -1;
  object-fit: cover;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10vh;
  position: absolute;
  top: 25vh;
  left: 160px;
  color: white;
  @media screen and (max-width: 1440px) {
    left: 40px;
  }
`;
const Notice = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 500px;
  font-size: 2.5rem;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const H1 = styled.div`
  font-size: 6rem;
  font-weight: bold;
  line-height: 0.9em;
  margin-bottom: 0.2em;
`;
const H2 = styled.div`
  font-size: 2.5rem;
  opacity: 0.8;
  font-weight: lighter;
`;
const PageBarBackground = styled.div`
  display: flex;
  height: 3px;
  width: 210px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-right: 2em;
`;
const CurPageBar = styled.div`
  height: 3px;
  width: 100%;
`;
const White = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Page = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
`;
const MaxPage = styled.div`
  font-size: 2rem;
  opacity: 0.4;
`;
const CurPage = styled.div`
  font-size: 2.5rem;
  margin-right: 0.3em;
`;
const PageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const PageBarWapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LeftButton = styled.div`
  cursor: pointer;
`;
const RightButton = styled.div`
  cursor: pointer;
`;
