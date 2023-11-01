import { useState } from 'react';

function usePagination(maxPage: number) {
  const [page, setPage] = useState(0);

  const setNextPage = () => {
    setPage((cur) => {
      const nextPage = cur + 1 < maxPage ? cur + 1 : cur;
      return nextPage;
    });
  };

  const setPrevPage = () => {
    setPage((cur) => {
      const prevPage = cur > 0 ? cur - 1 : 0;
      return prevPage;
    });
  };

  return {
    page,
    setNextPage,
    setPrevPage,
  };
}

export default usePagination;
