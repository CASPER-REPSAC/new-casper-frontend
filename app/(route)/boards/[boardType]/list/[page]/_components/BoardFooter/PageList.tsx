'use client';

import { useRouter } from 'next/navigation';
import { DefaultButton, LeftButton, RightButton } from 'app/_components/common';
import { ICON_SIZE } from 'app/_constants/size';
import { usePagination } from 'app/_hooks';
import { motion } from 'framer-motion';

interface Props {
  maxPage: number;
  curPage: number;
  boardType: string;
}

function PageList({ maxPage, curPage, boardType }: Props) {
  const { push, prefetch } = useRouter();
  const pageInteval = 10;
  const footerMaxPage = Math.ceil(maxPage / pageInteval);
  const { page: footerPage, paginate } = usePagination({
    maxPage: footerMaxPage,
    initialPage: Math.floor((Number(curPage) - 1) / 10),
  });

  const start = footerPage * pageInteval;
  const fullPageList = Array.from({ length: maxPage }, (_, idx) => idx + 1);
  const pageList = fullPageList.slice(start, start + pageInteval);

  return (
    <>
      <LeftButton size={ICON_SIZE.medium} onClick={() => paginate(-1)} />
      <div className="flex justify-around md:w-[400px]">
        {pageList.map((page) => {
          const href = `/boards/${boardType}/list/${page}`;
          const onClick = () =>
            push(href, {
              scroll: false,
            });

          const onMouseEnter = () => prefetch(href);
          return (
            <DefaultButton
              key={page}
              className="relative"
              onMouseEnter={onMouseEnter}
              onClick={onClick}
              size="sm"
            >
              {page === Number(curPage) && (
                <motion.div
                  layoutId={`${boardType}_page_button`}
                  className="absolute left-0 top-0 -z-10 h-full w-full rounded bg-slate-200 dark:bg-slate-700"
                />
              )}
              {page}
            </DefaultButton>
          );
        })}
      </div>
      <RightButton size={ICON_SIZE.medium} onClick={() => paginate(1)} />
    </>
  );
}

export default PageList;
