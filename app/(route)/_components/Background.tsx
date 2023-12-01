'use client';

import { LeftButton, RightButton } from 'app/_components/common';
import { usePagination } from 'app/_hooks';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

interface Props {
  backgroundImages: string[];
}

function Background({ backgroundImages }: Props) {
  const maxPage = backgroundImages.length;
  const { page, paginate, direction } = usePagination(maxPage);

  const PageBar = [];
  for (let i = 0; i < maxPage; i += 1) {
    PageBar.push(
      <div key={i} className="h-full w-full">
        {page === i && (
          <motion.div className="w-full h-full bg-white" layoutId="line" />
        )}
      </div>,
    );
  }

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <MotionImage
          className="fixed top-0 left-0 w-full h-full -z-10 object-cover brightness-50"
          key={backgroundImages[page]}
          src={backgroundImages[page]}
          width={1000}
          height={500}
          quality={100}
          alt="background"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>

      <div className="flex flex-col">
        <div className="flex items-end mb-1 gap-2">
          <div className="text-3xl">{page + 1}</div>
          <div className="text-2xl opacity-40">/{maxPage}</div>
        </div>

        <div className="flex flex-row items-center">
          <div className="flex h-1 w-60 bg-gary-500">{PageBar}</div>
          <LeftButton onClick={() => paginate(-1)} />
          <RightButton onClick={() => paginate(1)} />
        </div>
      </div>
    </>
  );
}

const MotionImage = motion(Image);

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 50,
      stiffness: 700,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0,
  }),
};

export default Background;
