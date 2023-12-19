'use client';

import { ErrorProps } from 'app/_types/errorTypes';
import { useEffect } from 'react';

function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}

export default Error;
