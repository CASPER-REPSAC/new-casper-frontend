import { Variants, motion } from 'framer-motion';
import { ForwardedRef, MouseEventHandler, ReactNode, forwardRef } from 'react';

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function ToastPopup(
  { children, onClick }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <motion.div
      ref={ref}
      className="flex-center min-w-[12rem] cursor-pointer rounded border border-solid border-white bg-gray-700 px-5 py-3 text-lg"
      layout
      variants={popupVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      whileHover="hover"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

const popupVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.1,
  },
};
export default forwardRef(ToastPopup);
