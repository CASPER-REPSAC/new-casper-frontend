import { titleToUrl } from "@src/utils";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Item = styled(motion.div)<{ ishome: string }>`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  margin: 0 1.5em 0 1.5em;
  color: ${(props) =>
    props.ishome === "true" ? "white" : props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  opacity: 0.4;
`;
const UnderLine = styled(motion.div)`
  position: absolute;
  bottom: 15px;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.textColor};
`;

const NavSubMenu = styled(motion.div)`
  background-color: ${({ theme }) => theme.color1};
  position: absolute;
  top: 70px;

  color: ${({ theme }) => theme.textColor};
  box-shadow: 2px 3px 5px ${({ theme }) => theme.boxShadow};
  transform-origin: top;
  display: flex;
  flex-direction: column;
`;
const Li = styled(motion.li)``;

const StyledLink = styled(motion(Link))`
  text-decoration: none;
  color: white;
  width: 7em;

  height: 4rem;
  line-height: 4rem;
  font-size: 1.6rem;
  padding-left: 1.2em;
  padding-right: 1.2em;

  &:hover {
    background-color: ${({ theme }) => theme.liquid};
  }
  border-bottom: 1px solid ${({ theme }) => theme.liquid};
  z-index: 100;
`;

const StyledA = styled(motion.a)`
  text-decoration: none;
  color: white;
  width: 7em;

  height: 4rem;
  line-height: 4rem;
  font-size: 1.6rem;
  padding-left: 1.2em;
  padding-right: 1.2em;

  &:hover {
    background-color: ${({ theme }) => theme.liquid};
  }
  border-bottom: 1px solid ${({ theme }) => theme.liquid};
  z-index: 100;
`;

interface INavItem {
  path?: string;
  menus?: string[];
  menus_url?: string[];
  atag_url?: string[];
  children?: React.ReactNode;
}

function NavItem({ path, menus, menus_url, atag_url, children }: INavItem) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const rootPath = path?.split("/")[1]; // nav가 가리키는 경로
  const basePath = router.pathname.split("/")[1]; // 현재 경로
  const navItemControls = useAnimationControls();
  const subMenuContainerControls = useAnimationControls();
  const liControls = useAnimationControls();
  const [linkUrl, setLinkUrl] = useState([""]);
  const [aLinkUrl, setALinkUrl] = useState([""]);

  useEffect(() => {
    menus_url ? setLinkUrl(menus_url) : null;
    atag_url ? setALinkUrl(atag_url) : null;
  }, [menus_url, atag_url]);
  // 현재 경로 흰색으로 표시
  useEffect(() => {
    if (rootPath === basePath) {
      navItemControls.start({
        opacity: 1,
      });
    } else {
      navItemControls.start({
        opacity: 0.4,
      });
    }
  }, [navItemControls, basePath, rootPath]);

  const itemMouseOverHandler = async () => {
    navItemControls.start({
      opacity: 1,
    });
    await subMenuContainerControls.start({
      scaleY: 1,
      transition: {
        duration: 0.1,
      },
    });
    liControls.start({
      x: 0,
      opacity: 1,
    });
  };

  const itemMouseOutHandler = async () => {
    if (rootPath !== basePath) {
      navItemControls.start({
        opacity: 0.4,
      });
    }
    await subMenuContainerControls.start({
      scaleY: 0,
      transition: {
        duration: 0.1,
      },
    });
    liControls.start({
      x: -10,
      opacity: 0,
      transition: {
        duration: 0,
      },
    });
  };

  return (
    <Item
      onClick={() => {
        path ? router.push(path) : null;
      }}
      animate={navItemControls}
      ishome={String(isHome)}
      onMouseOver={itemMouseOverHandler}
      onMouseOut={itemMouseOutHandler}
    >
      {children}
      {basePath === `${rootPath}` ? <UnderLine layoutId="underline" /> : null}

      <NavSubMenu animate={subMenuContainerControls} initial={{ scaleY: 0 }}>
        {menus?.map((menu, idx) => {
          return (
            <>
              {linkUrl[idx] ? (
                <StyledLink
                  key={idx}
                  animate={liControls}
                  transition={{ delay: idx * 0.05 }}
                  initial={{ opacity: 0, x: -5 }}
                  href={linkUrl[idx]}
                >
                  {menu}
                </StyledLink>
              ) : null}
              {aLinkUrl[idx] ? (
                <StyledA href={aLinkUrl[idx]}>{menu}</StyledA>
              ) : null}
            </>
          );
        })}
      </NavSubMenu>
    </Item>
  );
}

export default NavItem;
