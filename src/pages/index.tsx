import styled from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkState } from "@src/atoms";

const Background = styled.div<{ bgurl: string }>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bgurl});
  background-position: center;
  background-size: cover;
  filter: brightness(50%);
  z-index: -1;
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
const PageBar = styled.div`
  display: flex;
  height: 3px;
  width: 210px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-right: 2em;
`;
const CurPageBar = styled(motion.div)`
  height: 3px;
  width: 100%;
`;
const White = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Page = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
`;
const All = styled.div`
  font-size: 2rem;
  opacity: 0.4;
`;
const Cur = styled.div`
  font-size: 2.5rem;
  margin-right: 0.3em;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LeftButton = styled(motion.div)`
  cursor: pointer;
`;
const RightButton = styled(motion.div)`
  cursor: pointer;
`;

const buttonVars: Variants = {
  initial: {
    opacity: 0.4,
  },
  animate: {
    opacity: 1,
  },
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(5);
  const [bgImgs, setBgImgs] = useState(["background1.jpg", "background2.jpg"]);

  console.log(bgImgs[page - 1]);

  const nextPage = () => {
    setPage((curPage) => {
      return curPage === allPage ? allPage : curPage + 1;
    });
  };
  const prevPage = () => {
    setPage((curPage) => {
      return curPage === 1 ? 1 : curPage - 1;
    });
  };
  const renderPageBar = () => {
    const result = [];
    for (let i = 0; i < allPage; i++) {
      result.push(
        <CurPageBar key={i}>
          {page === i + 1 ? <White layoutId="white" /> : null}
        </CurPageBar>
      );
    }
    return result;
  };

  return (
    <>
      <Background bgurl={bgImgs[page - 1]} />
      <Body>
        <Notice>
          <HiLightBulb size={40} color="yellow" />
          신입생 모집 기간입니다.
        </Notice>
        <Title>
          <H1>THE CENTER OF SECURITY</H1>
          <H2>정보 보안 동아리 CASPER</H2>
        </Title>
        <Col>
          <Page>
            <Cur>{page}</Cur>
            <All>/{allPage}</All>
          </Page>
          <Row>
            <PageBar>{renderPageBar()}</PageBar>
            <LeftButton
              variants={buttonVars}
              initial="initial"
              whileHover="animate"
              onClick={prevPage}
            >
              <MdArrowBackIos size={25} />
            </LeftButton>
            <RightButton
              variants={buttonVars}
              initial="initial"
              whileHover="animate"
              onClick={nextPage}
            >
              <MdArrowForwardIos size={25} />
            </RightButton>
          </Row>
        </Col>
      </Body>
    </>
  );
}
