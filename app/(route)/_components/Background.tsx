'use client';

import { LeftButton, RightButton } from '@src/components/common/featureTag';
import { usePagination } from 'app/_hooks';
import { styled } from 'styled-components';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface Props {
  backgroundImages: string[];
}

function Background({ backgroundImages }: Props) {
  const maxPage = backgroundImages.length;
  const { page, paginate, direction } = usePagination(maxPage);

  const PageBar = [];
  for (let i = 0; i < maxPage; i += 1) {
    PageBar.push(
      <CurPageBar key={i}>
        {page === i && <White layoutId="line" />}
      </CurPageBar>,
    );
  }

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <Img
          key={backgroundImages[page]}
          src={backgroundImages[page]}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
        />
      </AnimatePresence>
      <PageInfoWrapper>
        <Page>
          <CurPage>{page + 1}</CurPage>
          <MaxPage>/{maxPage}</MaxPage>
        </Page>
        <PageBarWapper>
          <PageBarBackground>{PageBar}</PageBarBackground>
          <LeftButton onClick={() => paginate(-1)} />
          <RightButton onClick={() => paginate(1)} />
        </PageBarWapper>
      </PageInfoWrapper>
    </>
  );
}

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

const Img = styled(motion.img)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  filter: brightness(50%);
  z-index: -1;
  object-fit: cover;
`;

const PageBarBackground = styled.div`
  display: flex;
  height: 3px;
  width: 210px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-right: 2em;
`;

const Page = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
`;
const MaxPage = styled.div`
  font-size: 2rem;
  opacity: 0.4;
`;
const CurPage = styled.div`
  font-size: 2.5rem;
  margin-right: 0.3em;
`;
const PageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const PageBarWapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CurPageBar = styled.div`
  height: 3px;
  width: 100%;
`;
const White = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export default Background;
