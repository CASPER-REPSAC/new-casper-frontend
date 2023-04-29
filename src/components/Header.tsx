import { isDarkState } from "../atoms";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import NavItem from "./NavItem";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  width: 100vw;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0);
  z-index: 10;
  font-size: 2rem;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  margin-left: 160px;
  margin-right: 160px;
  justify-content: space-between;

  @media screen and (max-width: 1440px) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;
const Img = styled.img`
  width: 170px;
  height: 36px;
  cursor: pointer;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
`;

const DarkModeButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
`;
const LoginButton = styled(motion.button)`
  border: 0;
  background-color: inherit;
  cursor: pointer;
  opacity: 0.4;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

interface headerProps {
  bgColor?: string;
}

export default function Header({ bgColor }: headerProps) {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const router = useRouter();
  const isHome = router.pathname === "/";
  const isDarkHome = isDark || isHome;
  const basePath = router.pathname.split("/")[1];

  const goHome = () => {
    router.push("/");
  };

  return (
    <Wrapper>
      <Body>
        {/* 좌측 Logo */}
        {isDarkHome ? (
          <Img src="/casper_logo_white.png" onClick={goHome} />
        ) : (
          <Img src="/casper_logo_black.png" onClick={goHome} />
        )}

        <Items>
          {/* 네비게이션 */}
          <NavItem path="/members/active">Members</NavItem>
          <NavItem path="/album">Album</NavItem>
          <NavItem path="/boards/notice_board">Boards</NavItem>
          <NavItem path="/intranet">Intranet</NavItem>
          <NavItem path="/login">
            <SlLogin color={isDarkHome ? "white" : "black"} size={20}></SlLogin>
          </NavItem>
        </Items>
      </Body>
      {/* 다크모드 버튼 */}
      <DarkModeButton onClick={() => setIsDark((cur) => !cur)}>
        {isDark ? (
          <BsFillMoonFill></BsFillMoonFill>
        ) : (
          <BsFillSunFill color={isHome ? "white" : "black"}></BsFillSunFill>
        )}
      </DarkModeButton>
    </Wrapper>
  );
}
