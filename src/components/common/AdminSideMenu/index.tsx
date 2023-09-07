import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {}

function Menu({ ...props }: Props) {
  return <Wrapper {...props} />;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
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
const SubMenu = styled.li`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textWeek};
`;

Menu.SubMenuList = SubMenuList;
Menu.SubMenu = SubMenu;
Menu.Title = MenuTitle;

export default Menu;
