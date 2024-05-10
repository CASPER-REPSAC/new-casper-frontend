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

interface Props {
  maxPage: number;
}

function PageNav({ maxPage }: Props) {
  const INTERVAL = 7;
  const { page: curPageParam, boardType } = useParams<BoardListParams>();
  const curPage = Number(curPageParam);

  const prevPage = curPage - 1 < 1 ? 1 : curPage - 1;
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
            href={`/boards/${boardType}/list/${prevPage}`}
          />
        </PaginationItem>

        {getCurPageList().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              scroll={false}
              isActive={page === curPage}
              href={`/boards/${boardType}/list/${page}`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            scroll={false}
            href={`/boards/${boardType}/list/${nextPage}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PageNav;
