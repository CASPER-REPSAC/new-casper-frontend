import { MouseEventHandler, ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  title?: string;
  icon?: ReactElement;
  subMenus?: ReactElement;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function HeaderMenu({ subMenus, title, icon, onClick }: Props) {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  return (
    <Wrapper
      onClick={onClick}
      onMouseOver={() => setSubMenuVisible(true)}
      onMouseOut={() => setSubMenuVisible(false)}
    >
      {icon && <Icon>{icon}</Icon>}
      {title && <Title>{title}</Title>}
      {subMenus && (
        <SubMenuSection $visible={subMenuVisible}>{subMenus}</SubMenuSection>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.menuHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.menuActive};
  }
  cursor: pointer;
  padding: 0 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 3rem;
  font-size: 2rem;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50px;
`;
const SubMenuSection = styled.div<{ $visible: boolean }>`
  ${({ $visible }) =>
    $visible
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `};

  width: 100%;
  position: absolute;
  z-index: 1;
  transition: all 0.3s ease-in;
  top: 59px;
`;

export default HeaderMenu;
