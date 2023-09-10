import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {}

function AdminSideMenu({ ...props }: Props) {
  return <Wrapper {...props} />;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.surfacePointAlt};
  }
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
  &:hover {
    color: ${({ theme }) => theme.textStrong};
  }
`;

AdminSideMenu.SubMenuList = SubMenuList;
AdminSideMenu.SubMenu = SubMenu;
AdminSideMenu.Title = MenuTitle;

export default AdminSideMenu;
