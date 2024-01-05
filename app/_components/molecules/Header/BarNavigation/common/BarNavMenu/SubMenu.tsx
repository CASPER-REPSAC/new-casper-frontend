import { Variants, motion } from 'framer-motion';

interface Props {
  menus: JSX.Element;
}

function SubMenu({ menus }: Props) {
  return (
    <motion.ul
      className="
      flex
      w-max
        flex-col rounded
        bg-sky-50
        p-2
        shadow-lg
        backdrop-blur-lg
        dark:bg-slate-950/70
        "
      variants={subMenuVariants}
      initial="hidden"
      animate="visible"
    >
      {menus}
    </motion.ul>
  );
}

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
