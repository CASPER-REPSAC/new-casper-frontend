'use client';

import { PostReqData } from '@app/_types/PostTypes';
import { useParams } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function PostFormProvider({ children }: PropsWithChildren) {
  const { boardType } = useParams<{ boardType: string }>();
  const defaultValues: PostReqData = {
    boardId: boardType,
    category: 'all',
    hide: false,
    notice: false,
    title: '',
    content: '',
    photo: 'test',
  };
  const methods = useForm<PostReqData>({ defaultValues });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export default PostFormProvider;
