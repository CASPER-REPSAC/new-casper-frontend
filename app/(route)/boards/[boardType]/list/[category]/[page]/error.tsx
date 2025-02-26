'use client';

import { useEffect } from 'react';
import { TOAST_TITLE } from '@app/_constants/message';
import { ErrorProps } from '@app/_types/errorTypes';
import { Button } from '@app/_shadcn/components/ui/button';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

export default function Error({ error, reset }: ErrorProps) {
  const { toast } = useToast();

  useEffect(() => {
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
