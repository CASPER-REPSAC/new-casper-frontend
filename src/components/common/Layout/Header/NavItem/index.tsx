import { useRouter } from 'next/router';
import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import SubMenu from './SubMenu';

interface Props extends HTMLAttributes<HTMLDivElement> {
  subMenuInfo?: {
    [key: string]: {
      name: string;
      url: string;
    };
  };
  children?: React.ReactNode;
}

function NavItem({ subMenuInfo, ...props }: Props) {
  const [SubMenuOpen, setSubMenuOpen] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  const openSubMenu = () => {
    setSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setSubMenuOpen(false);
  };

  return (
    <Wrapper
      $ishome={isHome}
      onMouseOver={openSubMenu}
      onMouseOut={closeSubMenu}
      {...props}
    >
      {props.children}
      {subMenuInfo && <SubMenu subMenuInfo={subMenuInfo} open={SubMenuOpen} />}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $ishome: boolean }>`
  display: flex;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  margin: 0 1.5em;
  color: ${(props) => (props.$ishome ? 'white' : props.theme.textDefault)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default React.memo(NavItem);
