import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.div<{ bgColor?: string }>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.bgColor};
  z-index: 10;
  font-size: 2.4rem;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  margin-left: 160px;
  margin-right: 160px;
  @media screen and (max-width: 1300px) {
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
`;
const Item = styled(motion(Link))`
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  margin-left: 1em;
  cursor: pointer;
`;
const UnderLine = styled(motion.div)`
  position: absolute;
  bottom: 15px;
  width: 100%;
  height: 2px;
  background-color: white;
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

export default function Header({ bgColor }: headerProps) {
  const navigate = useRouter();
  const goHome = () => {
    navigate.push("/");
  };
  return (
    <Wrapper bgColor={bgColor ? bgColor : undefined}>
      <Body>
        <Img src="casper_logo_white.png" onClick={goHome} />

        <Items>
          <Item
            href="/members"
            variants={itemVars}
            whileHover="animate"
            initial="initial"
          >
            Members
            {navigate.pathname === "/members" ? (
              <UnderLine layoutId="underline" />
            ) : null}
          </Item>
          <Item
            href="/album"
            variants={itemVars}
            whileHover="animate"
            initial="initial"
          >
            Album
            {navigate.pathname === "/album" ? (
              <UnderLine layoutId="underline" />
            ) : null}
          </Item>
          <Item
            href="/boards"
            variants={itemVars}
            whileHover="animate"
            initial="initial"
          >
            Boards
            {navigate.pathname === "/boards" ? (
              <UnderLine layoutId="underline" />
            ) : null}
          </Item>
          <Item
            href="/intranet"
            variants={itemVars}
            whileHover="animate"
            initial="initial"
          >
            Intranet
            {navigate.pathname === "/intranet" ? (
              <UnderLine layoutId="underline" />
            ) : null}
          </Item>
          <Item
            href="/mypage"
            variants={itemVars}
            whileHover="animate"
            initial="initial"
          >
            MyPage
            {navigate.pathname === "/mypage" ? (
              <UnderLine layoutId="underline" />
            ) : null}
          </Item>
        </Items>
      </Body>
    </Wrapper>
  );
}
