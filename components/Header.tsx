import { motion, Variants } from "framer-motion";
import Link from "next/link";
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
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  margin-left: 160px;
  margin-right: 160px;
  font-size: 1.5rem;
`;
const Img = styled.img`
  width: 170px;
  height: 36px;
  margin-right: auto;
  cursor: pointer;
`;
const Items = styled.div`
  display: flex;
`;
const Item = styled(motion(Link))`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  margin-left: 1em;
  cursor: pointer;
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
  //   const navigate = useNavigate();
  const goHome = () => {
    // navigate("/");
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
          </Item>
          <Item
            href="/album"
            variants={itemVars}
            whileHover="animate"
            initial="initial"
          >
            Album
          </Item>
          <Item
            href="/boards"
            variants={itemVars}
            whileHover="animate"
            initial="initial"
          >
            Boards
          </Item>
          <Item
            href="/intranet"
            variants={itemVars}
            whileHover="animate"
            initial="initial"
          >
            Intranet
          </Item>
          <Item
            href="/mypage"
            variants={itemVars}
            whileHover="animate"
            initial="initial"
          >
            MyPage
          </Item>
        </Items>
      </Body>
    </Wrapper>
  );
}
