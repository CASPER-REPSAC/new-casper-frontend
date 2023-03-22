import { isDarkState } from "../atoms";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import styled from "styled-components";

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
const Item = styled(motion(Link))<{ ishome: string }>`
  position: relative;
  text-decoration: none;
  margin-left: 1em;
  cursor: pointer;
  color: ${(props) =>
    props.ishome === "true" ? "white" : props.theme.textColor};
`;
const UnderLine = styled(motion.div)`
  position: absolute;
  bottom: 15px;
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.textColor};
`;

const Switch = styled(motion.div)<{ isdark: String; ishome: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isdark === "true" ? "flex-start" : "flex-end"};
  width: 40px;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;

  border: 1px solid
    ${(props) => (props.ishome === "true" ? "white" : props.theme.textColor)};
  cursor: pointer;
`;

const Circle = styled(motion.div)<{ ishome: string }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) =>
    props.ishome === "true" ? "white" : props.theme.textColor};
`;

const itemVars: Variants = {
  initial: {
    opacity: 0.4,
  },
  animate: {
    opacity: 1,
  },
};

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
  const navigate = useRouter();
  const paths = ["members", "album", "boards", "intranet", "mypage"];
  const isHome = navigate.pathname === "/";
  const isDarkHome = isDark || isHome;

  const goHome = () => {
    navigate.push("/");
  };

  return (
    <Wrapper isdark={String(!(isDark || isHome))}>
      <Body>
        {isDarkHome ? (
          <Img src="casper_logo_white.png" onClick={goHome} />
        ) : (
          <Img src="casper_logo_black.png" onClick={goHome} />
        )}
        <Items>
          <Switch
            isdark={String(isDark)}
            ishome={String(isHome)}
            onClick={() => setIsDark((cur) => !cur)}
          >
            <Circle layout transition={spring} ishome={String(isHome)} />
          </Switch>
          {paths.map((path, idx) => (
            <Item
              key={idx}
              href={`/${path}`}
              variants={itemVars}
              whileHover="animate"
              initial="initial"
              ishome={String(isHome)}
            >
              {path}
              {navigate.pathname === `/${path}` ? (
                <UnderLine layoutId="underline" />
              ) : null}
            </Item>
          ))}
        </Items>
      </Body>
    </Wrapper>
  );
}
