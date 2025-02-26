'use client';

import { ErrorProps } from '@app/_types/errorTypes';

function Error({ reset }: ErrorProps) {
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
