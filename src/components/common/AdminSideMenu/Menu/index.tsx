import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { styled } from 'styled-components';

interface ContextProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<ContextProps>({
  open: false,
  setOpen: () => {},
});

interface Props {
  children: ReactNode;
}

function Menu({ children }: Props) {
  const [open, setOpen] = useState(false);

  const providerValue = useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open, setOpen],
  );

  const toggleSubMenuOpen = () => {
    setOpen(!open);
  };
  return (
    <MenuContext.Provider value={providerValue}>
      <Wrapper onClick={toggleSubMenuOpen}>{children}</Wrapper>
    </MenuContext.Provider>
  );
}

function SubMenuList({ children }: Props) {
  const { open } = useContext(MenuContext);
  return open ? <SubMenuWrapper>{children}</SubMenuWrapper> : null;
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
const SubMenuWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;
const SubMenu = styled.li`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textWeek};
`;

Menu.SubMenuList = SubMenuList;
Menu.SubMenu = SubMenu;
Menu.Title = MenuTitle;

export default Menu;
