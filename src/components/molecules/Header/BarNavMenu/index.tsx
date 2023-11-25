import { MouseEventHandler, ReactElement, ReactNode, useState } from 'react';
import { Variants, motion } from 'framer-motion';
import { styled } from 'styled-components';

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>;
  title: ReactNode;
  subMenus?: ReactElement[];
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

      {subMenus && isSubMenuOpen && (
        <SubMenuWrapper
          variants={subMenuVariants}
          initial="hidden"
          animate="visible"
        >
          {subMenus.map((subMenu) => (
            <motion.li key={subMenu.toLocaleString()} variants={itemVariants}>
              {subMenu}
            </motion.li>
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
  padding: 1rem;
  background-color: ${({ theme }) => theme.subMenuSurface};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.subMenuBorder};
`;

const TitleWrapper = styled.div`
  padding: 10px 30px;
`;
const Wrapper = styled.div``;

export default BarNavMenu;
