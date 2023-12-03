import { useState } from 'react';

interface Props {
  maxPage: number;
  initialPage?: number;
}

function usePagination({ maxPage, initialPage = 0 }: Props) {
  const [[page, direction], setPage] = useState([initialPage, 0]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage < 0 || newPage >= maxPage) return;

    setPage([newPage, newDirection]);
  };

  return {
    page,
    direction,
    paginate,
  };
}

export default usePagination;
