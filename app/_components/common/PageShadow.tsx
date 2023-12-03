import { AnimatePresence, motion } from 'framer-motion';
import { MouseEventHandler, ReactElement } from 'react';

interface Props {
  children?: ReactElement;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function PageShadow({ children, onClick }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="flex-center fixed left-0 top-0 z-pageShadow h-screen w-screen bg-black/70"
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
