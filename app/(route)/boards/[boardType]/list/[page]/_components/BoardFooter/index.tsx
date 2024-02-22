'use client';

import { BoardListParams } from '@app/_types/boardTypes';
import { LeftButton, RightButton } from '@app/_components/common';
import { ICON_SIZE } from '@app/_constants/size';
import { usePagination } from '@app/_hooks';
import PageNavigator from './PageNavigator';

interface Props {
  maxPage: number;
  params: BoardListParams;
}

function BoardFooter({ params: { boardType, page: curPage }, maxPage }: Props) {
  const PAGE_INTERVAL = 10;
  const footerMaxPage = Math.ceil(maxPage / PAGE_INTERVAL) - 1;
  const initialPage = Math.floor((Number(curPage) - 1) / 10);

  const { page: sliderPage, paginate } = usePagination({
    maxPage: footerMaxPage,
    initialPage,
  });

  return (
    <div className="flex justify-center gap-4">
      <LeftButton size={ICON_SIZE.medium} onClick={() => paginate(-1)} />
      <PageNavigator
        interval={PAGE_INTERVAL}
        curPage={sliderPage}
        maxPage={maxPage}
        params={{ boardType, page: curPage }}
      />
      <RightButton size={ICON_SIZE.medium} onClick={() => paginate(1)} />
    </div>
  );
}

export default BoardFooter;
