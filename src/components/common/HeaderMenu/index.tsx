import { MouseEventHandler, ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  title: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function HeaderMenu({ children, title, onClick }: Props) {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  return (
    <Wrapper
      onClick={onClick}
      onMouseOver={() => setSubMenuVisible(true)}
      onMouseOut={() => setSubMenuVisible(false)}
    >
      <Title>{title}</Title>
      <SubMenuSection $visible={subMenuVisible}>{children}</SubMenuSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 140px;
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.menuHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.menuActive};
  }
  cursor: pointer;
  padding: 0 1rem;
  border-radius: 40px;
  transition: all 0.3s ease;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  font-size: 2rem;
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
