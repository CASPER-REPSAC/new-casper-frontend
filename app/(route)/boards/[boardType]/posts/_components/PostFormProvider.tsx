'use client';

import { useParams } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CreateArticleForm } from '@app/_types/PostTypes';
import { BoardType } from '@app/_types/boardTypes';

function PostFormProvider({ children }: PropsWithChildren) {
  const { boardType } = useParams<{ boardType: string }>();
  const defaultValues: CreateArticleForm = {
    boardId: boardType as BoardType,
    category: 'all',
    hide: false,
    notice: false,
    title: '',
    content: '',
    photo: 'test',
    uploadedFiles: [],
    files: undefined,
  };
  const methods = useForm<CreateArticleForm>({ defaultValues });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export default PostFormProvider;
