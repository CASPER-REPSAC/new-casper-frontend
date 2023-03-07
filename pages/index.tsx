import styled from "styled-components";
import Header from "../components/Header";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { motion, Variants } from "framer-motion";
import Footer from "../components/Footer";

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: url("background.jpg");
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
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 500px;
  font-size: 1.2rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.div`
  font-size: 4rem;
  font-weight: bold;
  line-height: 0.9em;
  margin-bottom: 0.2em;
`;
const H2 = styled.div`
  font-size: 1.5rem;
  opacity: 0.8;
  font-weight: lighter;
`;
const Bar = styled.div`
  height: 3px;
  width: 210px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-right: 2em;
`;
const CurBar = styled.div`
  height: 3px;
  width: 70px;
  background-color: white;
`;
const Page = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
`;
const All = styled.div`
  font-size: 1.5rem;
  opacity: 0.4;
`;
const Cur = styled.div`
  font-size: 1.8rem;
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
  return (
    <>
      <Background />
      <Body>
        <Notice>
          <HiLightBulb size={40} color="yellow" />
          신입생 모집 기간입니다.
        </Notice>
        <Title>
          <H1>
            THE CENTER OF
            <br /> SECURITY
          </H1>
          <H2>정보 보안 동아리 CASPER</H2>
        </Title>
        <Col>
          <Page>
            <Cur>1 </Cur>
            <All>/3</All>
          </Page>
          <Row>
            <Bar>
              <CurBar />
            </Bar>
            <LeftButton
              variants={buttonVars}
              initial="initial"
              whileHover="animate"
            >
              <MdArrowBackIos size={25} />
            </LeftButton>
            <RightButton
              variants={buttonVars}
              initial="initial"
              whileHover="animate"
            >
              <MdArrowForwardIos size={25} />
            </RightButton>
          </Row>
        </Col>
      </Body>
    </>
  );
}
