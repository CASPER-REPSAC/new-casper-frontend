'use client';

import { useRouter } from 'next/navigation';
import { DefaultButton } from 'app/_components/common';
import { motion } from 'framer-motion';
import { BoardListParams } from '@app/_types/boardTypes';

interface Props {
  interval: number;
  curPage: number;
  maxPage: number;
  params: BoardListParams;
}

function PageNavigator({ interval, params, curPage, maxPage }: Props) {
  const { push, prefetch } = useRouter();

  const start = curPage * interval;
  const fullPageList = Array.from({ length: maxPage }, (_, idx) => idx + 1);
  const pageList = fullPageList.slice(start, start + interval);

  return (
    <div className="flex w-[400px] justify-center gap-2 md:gap-4">
      {pageList.map((page) => {
        const href = `/boards/${params.boardType}/list/${page}`;
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
            {page === Number(params.page) && (
              <motion.div
                style={{ originY: '0px' }}
                layoutId={`${params.boardType}_page_button`}
                className="absolute left-0 top-0 -z-10 h-full w-full rounded bg-slate-200 dark:bg-slate-700"
              />
            )}
            {page}
          </DefaultButton>
        );
      })}
    </div>
  );
}

export default PageNavigator;
