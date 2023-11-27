import { Variants, motion } from 'framer-motion';
import { useId } from 'react';
import { styled } from 'styled-components';

interface Props {
  menus: JSX.Element[];
}

function SubMenu({ menus }: Props) {
  const uniqueId = useId();
  return (
    <SubMenuWrapper
      variants={subMenuVariants}
      initial="hidden"
      animate="visible"
    >
      {menus.map((menu) => (
        <motion.li key={`${uniqueId}_${menu.key}`} variants={itemVariants}>
          {menu}
        </motion.li>
      ))}
    </SubMenuWrapper>
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

const SubMenuWrapper = styled(motion.ul)`
  padding: 1rem;
  background-color: ${({ theme }) => theme.subMenuSurface};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.subMenuBorder};
`;

export default SubMenu;
