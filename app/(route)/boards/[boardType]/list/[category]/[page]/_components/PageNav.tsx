'use client';

import { useParams } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@app/_shadcn/components/ui/pagination';
import { BoardListParams } from '@app/_types/boardTypes';
import useArticleListQuery from '@app/_hooks/apis/boards/useArticleListQuery';
import { NEW_PATH } from '@app/_constants/urls';

function PageNav() {
  const INTERVAL = 7;
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
  const { maxPageNum: maxPage } = data;
  const curPage = Number(curPageParam);

  const prevPage = curPage - 1 <= 1 ? 1 : curPage - 1;
  const nextPage = curPage + 1 >= maxPage ? maxPage : curPage + 1;

  const getCurPageList = () => {
    const allPageList = Array.from({ length: maxPage }, (_, idx) => idx + 1);

    if (curPage < 6) {
      return allPageList.slice(0, INTERVAL);
    }
    if (curPage > maxPage - INTERVAL / 2) {
      return allPageList.slice(maxPage - INTERVAL);
    }
    return allPageList.slice(curPage - INTERVAL / 2, curPage + INTERVAL / 2);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            scroll={false}
            href={NEW_PATH.boardList.url({
              boardType,
              page: prevPage,
              category,
            })}
          />
        </PaginationItem>

        {getCurPageList().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              scroll={false}
              isActive={page === curPage}
              href={NEW_PATH.boardList.url({ boardType, page, category })}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            scroll={false}
            href={NEW_PATH.boardList.url({
              boardType,
              page: nextPage,
              category,
            })}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PageNav;
