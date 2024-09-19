'use client';

/* eslint-disable no-console */
import { TOAST_TITLE } from '@app/_constants/message';
import { Button } from '@app/_shadcn/components/ui/button';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { ErrorProps } from '@app/_types/errorTypes';
import { useEffect } from 'react';

export default function Error({ error, reset }: ErrorProps) {
  const { toast } = useToast();

  useEffect(() => {
    console.error(error.message);

    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: error.message,
    });
  }, [error, toast]);

  return (
    <div>
      <h2>{error.message}</h2>
      <Button onClick={() => reset()}>다시 시도하기</Button>
    </div>
  );
}
