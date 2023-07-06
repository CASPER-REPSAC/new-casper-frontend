import { useAnimationControls } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';
import {
  Div,
  Item,
  NavItemWrapper,
  NavSubMenu,
  StyledA,
  StyledLink,
  UnderLine,
} from './Header.style';

interface INavItem {
  path?: string;
  menus?: string[];
  menus_url?: string[]; // 내부 경로
  atag_url?: string[]; // 외부 경로
  children?: React.ReactNode;
}

function NavItem({ path, menus, menus_url, atag_url, children }: INavItem) {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const rootPath = path?.split('/')[1]; // nav가 가리키는 경로
  const basePath = router.pathname.split('/')[1]; // 현재 경로
  const navItemControls = useAnimationControls();
  const subMenuContainerControls = useAnimationControls();
  const liControls = useAnimationControls();
  const [linkUrl, setLinkUrl] = useState(['']);
  const [aLinkUrl, setALinkUrl] = useState(['']);

  useEffect(() => {
    menus_url ? setLinkUrl(menus_url) : null;
    atag_url ? setALinkUrl(atag_url) : null;
  }, [menus_url, atag_url]);

  // 현재 경로 흰색으로 표시 (애니메이션)
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
    <NavItemWrapper
      onMouseOver={itemMouseOverHandler}
      onMouseOut={itemMouseOutHandler}
    >
      {/* 메뉴 */}
      <Item
        onClick={() => {
          path ? router.push(path) : null;
        }}
        animate={navItemControls}
        ishome={String(isHome)}
      >
        {children}

        {/* 현재 경로 밑줄 */}
        {basePath === `${rootPath}` ? <UnderLine layoutId="underline" /> : null}
      </Item>

      {/* 서브 메뉴 */}
      <NavSubMenu animate={subMenuContainerControls} initial={{ scaleY: 0 }}>
        {menus?.map((menu, idx) => {
          return (
            <Div key={idx}>
              {linkUrl[idx] ? (
                <StyledLink
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
            </Div>
          );
        })}
      </NavSubMenu>
    </NavItemWrapper>
  );
}

export default React.memo(NavItem);
