import { useState } from 'react';

function usePagination(maxPage: number) {
  const [[page, direction], setPage] = useState([0, 0]);

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
