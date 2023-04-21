import { isDarkState } from "../atoms";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import NavItem from "./NavItem";

const Wrapper = styled.div<{ isdark: string }>`
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

const Switch = styled(motion.div)<{ isdark: String; ishome: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isdark === "true" ? "flex-start" : "flex-end"};
  width: 60px;
  height: 0px;
  border-top: 1px solid
    ${(props) => (props.ishome === "true" ? "white" : props.theme.textColor)};
  border-bottom: 1px solid
    ${(props) => (props.ishome === "true" ? "white" : props.theme.textColor)};
  cursor: pointer;
`;

const Rect = styled(motion.div)<{ ishome: string }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) =>
    props.ishome === "true" ? "white" : props.theme.textColor};
`;

interface headerProps {
  bgColor?: string;
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

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
    <Wrapper isdark={String(!isDarkHome)}>
      <Body>
        {/* 좌측 Logo */}
        {isDarkHome ? (
          <Img src="/casper_logo_white.png" onClick={goHome} />
        ) : (
          <Img src="/casper_logo_black.png" onClick={goHome} />
        )}

        <Items>
          {/* 다크모드 버튼 */}
          <Switch
            isdark={String(isDark)}
            ishome={String(isHome)}
            onClick={() => setIsDark((cur) => !cur)}
          >
            <Rect layout transition={spring} ishome={String(isHome)} />
          </Switch>

          {/* 네비게이션 */}
          <NavItem text="Members" path="/members/active" basePath={basePath} />
          <NavItem
            text="Boards"
            path="/boards/notice_board"
            basePath={basePath}
          />
        </Items>
      </Body>
    </Wrapper>
  );
}
