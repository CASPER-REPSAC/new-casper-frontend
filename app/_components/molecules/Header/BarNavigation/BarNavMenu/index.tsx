import { MouseEventHandler, ReactNode, useState } from 'react';
import { styled } from 'styled-components';
import SubMenu from './SubMenu';

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>;
  title: ReactNode;
  subMenus?: JSX.Element[];
}

function BarNavMenu({ title, onClick, subMenus }: Props) {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={() => setSubMenuOpen(true)}
      onMouseLeave={() => setSubMenuOpen(false)}
    >
      <TitleWrapper>{title}</TitleWrapper>

      {subMenus && isSubMenuOpen && <SubMenu menus={subMenus} />}
    </Wrapper>
  );
}

const TitleWrapper = styled.div`
  padding: 10px 30px;
`;
const Wrapper = styled.div``;

export default BarNavMenu;
