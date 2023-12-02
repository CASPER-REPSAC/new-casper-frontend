import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function SideMenuWrapper({ children }: Props) {
  return (
    <motion.div
      className="static top-44 h-full  w-full lg:sticky lg:w-60"
      layoutRoot
      layout
    >
      {children}
    </motion.div>
  );
}

export default SideMenuWrapper;
