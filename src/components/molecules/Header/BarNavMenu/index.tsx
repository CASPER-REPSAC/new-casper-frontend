import {
  Children,
  MouseEventHandler,
  ReactNode,
  isValidElement,
  useState,
} from 'react';
import { Variants, motion } from 'framer-motion';
import { styled } from 'styled-components';
import Title from './Title';
import SubMenu from './SubMenu';

const getSubMenus = (children: ReactNode) => {
  const SubMenuType = (<SubMenu title="" href="" />).type;
  const childrenArray = Children.toArray(children);
  const subMenus = childrenArray.filter(
    (child) => isValidElement(child) && child.type === SubMenuType,
  );

  if (subMenus.length === 0) return null;
  return subMenus;
};
const getTitle = (children: ReactNode) => {
  const TitleType = (<Title />).type;
  const childrenArray = Children.toArray(children);
  const title = childrenArray.filter(
    (child) => isValidElement(child) && child.type === TitleType,
  );
  return title;
};

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

function BarNavMenu({ children, onClick }: Props) {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const subMenus = getSubMenus(children);
  const title = getTitle(children);

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={() => setSubMenuOpen(true)}
      onMouseLeave={() => setSubMenuOpen(false)}
    >
      <TitleWrapper>{title}</TitleWrapper>

      {subMenus && isSubMenuOpen && (
        <SubMenuWrapper
          variants={subMenuVariants}
          initial="hidden"
          animate="visible"
        >
          {subMenus.map((subMenu) => (
            <motion.li variants={itemVariants}>{subMenu}</motion.li>
          ))}
        </SubMenuWrapper>
      )}
    </Wrapper>
  );
}
const itemVariants: Variants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const subMenuVariants: Variants = {
  hidden: { scaleY: 0, opacity: 0, transformOrigin: 'top' },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
};

const SubMenuWrapper = styled(motion.div)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.subMenuSurface};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.subMenuBorder};
`;

const TitleWrapper = styled.div`
  padding: 10px 30px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

BarNavMenu.SubMenu = SubMenu;
BarNavMenu.Title = Title;

export default BarNavMenu;
