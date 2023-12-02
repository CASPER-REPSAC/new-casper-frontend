'use client';

import { DefaultButton } from 'app/_components/common';
/* eslint-disable no-console */
import { useEffect } from 'react';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
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
