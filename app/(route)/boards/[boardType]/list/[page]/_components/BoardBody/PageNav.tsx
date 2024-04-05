';use client';

import { BoardListParams } from '@app/_types/boardTypes';
import { Pagination } from '@nextui-org/react';
import { useParams, useRouter } from 'next/navigation';

interface Props {
  maxPage: number;
}

function PageNav({ maxPage }: Props) {
  const { page: pageParma, boardType } = useParams<BoardListParams>();
  const { push } = useRouter();

  return (
    <Pagination
      showControls
      total={maxPage}
      page={Number(pageParma)}
      onChange={(page) => push(`/boards/${boardType}/list/${page}`)}
    />
  );
}

export default PageNav;
