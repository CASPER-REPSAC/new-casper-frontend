import { titleToUrl } from '@src/utils';
import { useRouter } from 'next/router';
import React from 'react';
import { Highlight, Item, StyledLink, Wrapper } from './SideBar.style';

interface SideBarProps {
  menu_path: {
    [key: string]: string;
  };
}

function SideBar({ menu_path }: SideBarProps) {
  const router = useRouter();
  const { member_type, board_type, year } = router.query;

  return (
    <Wrapper>
      {Object.entries(menu_path).map(([key, value], idx) => {
        const menu = key;
        const path = value;
        return (
          <StyledLink key={idx} href={path}>
            <Item>
              {menu}
              {member_type === titleToUrl[menu] ||
              board_type === titleToUrl[menu] ||
              year === titleToUrl[menu] ? (
                <Highlight />
              ) : null}
            </Item>
          </StyledLink>
        );
      })}
    </Wrapper>
  );
}

export default React.memo(SideBar);
