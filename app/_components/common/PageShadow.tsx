import { AnimatePresence, motion } from 'framer-motion';
import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function PageShadow({ children, onClick }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="flex-center z-pageShadow fixed left-0 top-0 h-screen w-screen bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageShadow;
