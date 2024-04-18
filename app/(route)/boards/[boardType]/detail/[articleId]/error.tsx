'use client';

import { ErrorProps } from '@app/_types/errorTypes';
import { Button } from '@nextui-org/react';
import { useEffect } from 'react';

function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="flex-center h-full w-full flex-col gap-4">
      <h2>글을 불러오는 중 에러가 발생했어요!</h2>

      <Button color="primary" type="button" onClick={() => reset()}>
        다시 시도하기
      </Button>
    </div>
  );
}

export default Error;
