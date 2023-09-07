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
  border-bottom: solid 1px ${({ theme }) => theme.borderDefault};
  width: 100%;
  cursor: pointer;
  padding: 2em 8em;
  gap: 1em;
`;
const MenuTitle = styled.div`
  font-size: 2rem;
  width: 100px;
`;
const SubMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 1em;
`;
const SubMenu = styled.li`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textWeek};
`;

Menu.SubMenuList = SubMenuList;
Menu.SubMenu = SubMenu;
Menu.Title = MenuTitle;

export default Menu;
