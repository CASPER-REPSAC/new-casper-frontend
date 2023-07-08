import { titleToUrl } from '@src/utils';
import { useRouter } from 'next/router';
import React from 'react';
import { Highlight, Item, StyledLink, Wrapper } from './SideBar.style';

interface SideBarProps {
  menus: string[];
  basePath: string;
}

function SideBar({ menus, basePath }: SideBarProps) {
  const router = useRouter();
  const { member_type, board_type, year } = router.query;

  return (
    <Wrapper>
      {menus.map((menu, idx) => (
        <StyledLink key={idx} href={`${basePath}/${titleToUrl[menu]}`}>
          <Item>
            {menu}
            {member_type === titleToUrl[menu] ||
            board_type === titleToUrl[menu] ||
            year === titleToUrl[menu] ? (
              <Highlight layoutId="highlight" />
            ) : null}
          </Item>
        </StyledLink>
      ))}
    </Wrapper>
  );
}

export default React.memo(SideBar);
