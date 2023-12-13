'use client';

import { useEffect } from 'react';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}
function Error({ error, reset }: Props) {
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
