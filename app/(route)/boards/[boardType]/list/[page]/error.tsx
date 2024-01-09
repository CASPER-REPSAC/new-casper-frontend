'use client';

/* eslint-disable no-console */
import { DefaultButton } from '@app/_components/common';
import { POPUP_DURATION } from '@app/_constants/duration';
import { usePopup } from '@app/_hooks';
import { ErrorProps } from '@app/_types/errorTypes';
import { useEffect } from 'react';

export default function Error({ error, reset }: ErrorProps) {
  const { openAndDeletePopup } = usePopup();

  useEffect(() => {
    console.error(error.message);

    openAndDeletePopup({
      message: error.message,
      duration: POPUP_DURATION.long,
    });
  }, [error, openAndDeletePopup]);

  return (
    <div>
      <h2>{error.message}</h2>
      <DefaultButton onClick={() => reset()}>다시 시도하기</DefaultButton>
    </div>
  );
}
