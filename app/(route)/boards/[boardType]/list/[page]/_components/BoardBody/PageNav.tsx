';use client';

import { BoardListParams } from '@app/_types/boardTypes';
import { Link, Pagination, PaginationItem } from '@nextui-org/react';
import { useParams } from 'next/navigation';

interface Props {
  maxPage: number;
}

function PageNav({ maxPage }: Props) {
  const { page: pageParma, boardType } = useParams<BoardListParams>();

  return (
    <Pagination
      showControls
      total={maxPage}
      page={Number(pageParma)}
      renderItem={({ page, ...props }) => (
        <PaginationItem
          as={Link}
          href={`/boards/${boardType}/list/${page}`}
          {...props}
        />
      )}
    />
  );
}

export default PageNav;
