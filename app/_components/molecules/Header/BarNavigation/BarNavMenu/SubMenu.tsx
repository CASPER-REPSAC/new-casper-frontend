import { Variants, motion } from 'framer-motion';
import { useId } from 'react';

interface Props {
  menus: JSX.Element[];
}

function SubMenu({ menus }: Props) {
  const uniqueId = useId();
  return (
    <motion.ul
      className="border-gray-white rounded border border-solid bg-gray-600 p-2"
      variants={subMenuVariants}
      initial="hidden"
      animate="visible"
    >
      {menus.map((menu) => (
        <motion.li key={`${uniqueId}_${menu.key}`} variants={itemVariants}>
          {menu}
        </motion.li>
      ))}
    </motion.ul>
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

export default SubMenu;
