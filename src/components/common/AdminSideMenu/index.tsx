import { HTMLAttributes } from 'react';
import { css, styled } from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  highlight?: boolean;
}

function AdminSideMenu({ highlight = false, ...props }: Props) {
  return <Wrapper $highlight={highlight} {...props} />;
}

const Wrapper = styled.div<{ $highlight: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.surfacePointAlt};
  }
  box-sizing: content-box;

  ${({ $highlight, theme }) =>
    $highlight &&
    css`
      background-color: ${theme.surfacePointDefault};
      &:hover {
        background-color: ${theme.surfacePointDefault};
      }
      border-right: 1px solid ${theme.white};
    `};
`;
const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  height: 60px;
  padding-left: 60px;
`;
const SubMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 1em;
  padding-left: 70px;
`;
const SubMenu = styled.li<{ $highlight: boolean }>`
  font-size: 1.6rem;
  color: ${({ theme, $highlight }) =>
    $highlight ? theme.textStrong : theme.textWeek};
  &:hover {
    color: ${({ theme }) => theme.textStrong};
  }
`;

AdminSideMenu.SubMenuList = SubMenuList;
AdminSideMenu.SubMenu = SubMenu;
AdminSideMenu.Title = MenuTitle;

export default AdminSideMenu;
