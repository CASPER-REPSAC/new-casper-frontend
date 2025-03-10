'use client';

import { useParams } from 'next/navigation';
import useArticleListQuery from '@app/_hooks/apis/boards/useArticleListQuery';
import CommonPagination from '@app/_components/common/CommonPagination';
import { NEW_PATH } from '@app/_constants/urls';
import { BoardListParams } from '@app/_types/boardTypes';

function PageNav() {
  const {
    page: curPageParam,
    boardType,
    category,
  } = useParams<BoardListParams>();
  const { data } = useArticleListQuery({
    page: Number(curPageParam),
    boardType,
    category,
  });
  if (!data) return null;
  const { totalItems, currentPage } = data;

  return (
    <CommonPagination
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={10}
      getHref={(page) => NEW_PATH.boardList.url({ boardType, page, category })}
    />
  );
}

export default PageNav;
