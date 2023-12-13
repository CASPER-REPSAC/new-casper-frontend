'use client';

/* eslint-disable no-console */
import { DefaultButton } from 'app/_components/common';
import { ErrorProps } from 'app/_types/errorTypes';
import { useEffect } from 'react';

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>알 수 없는 에러가 발생했어요.</h2>
      <DefaultButton onClick={() => reset()}>다시 시도하기</DefaultButton>
    </div>
  );
}
