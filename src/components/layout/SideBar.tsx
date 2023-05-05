import { titleToUrl } from "@src/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline;
  flex-direction: column;
  float: left;
  height: 100%;
  min-width: 230px;
  width: 230px;
  border-right: 1px solid ${(props) => props.theme.color2};
  border-left: 1px solid ${(props) => props.theme.color2};
  margin-right: 50px;
`;
const Item = styled.div`
  position: relative;
  display: flex;
  padding: 1em;
  height: 30px;
  font-size: 2rem;
  align-items: center;
`;
const Highlight = styled(motion.div)`
  position: absolute;
  left: -1px;
  background-color: rgba(0, 0, 0, 0.2);
  border-right: 1px solid ${(props) => props.theme.textColor};
  border-left: 1px solid ${(props) => props.theme.textColor};
  width: 100%;
  height: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;

interface SideBarProps {
  menus: string[];
  basePath: string;
}

function SideBar({ menus, basePath }: SideBarProps) {
  const router = useRouter();
  const { member_type, board_type } = router.query;

  return (
    <Wrapper>
      {menus.map((menu, idx) => (
        <StyledLink key={idx} href={`${basePath}/${titleToUrl[menu]}`}>
          <Item>
            {menu}
            {member_type === titleToUrl[menu] ||
            board_type === titleToUrl[menu] ? (
              <Highlight layoutId="highlight" />
            ) : null}
          </Item>
        </StyledLink>
      ))}
    </Wrapper>
  );
}

export default React.memo(SideBar);
