import { isDarkState } from "../atoms";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import NavItem from "./NavItem";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  width: 100vw;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0);
  z-index: 10;
  font-size: 2.4rem;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  margin-left: 160px;
  margin-right: 160px;
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
  margin-left: auto;
  align-items: center;
`;

const DarkModeButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
          {/* 다크모드 버튼 */}
          <DarkModeButton onClick={() => setIsDark((cur) => !cur)}>
            {isDark ? (
              <BsFillMoonFill></BsFillMoonFill>
            ) : (
              <BsFillSunFill color={isHome ? "white" : "black"}></BsFillSunFill>
            )}
          </DarkModeButton>

          {/* 네비게이션 */}
          <NavItem text="Members" path="/members/active" />
          <NavItem text="Boards" path="/boards/notice_board" />
          <NavItem text="Login" path="/login" />
        </Items>
      </Body>
    </Wrapper>
  );
}
