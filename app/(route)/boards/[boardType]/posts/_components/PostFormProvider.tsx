import { PostReqData } from '@app/_types/PostTypes';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  boardType: string;
}

function PostFormProvider({ children, boardType }: Props) {
  const defaultValues: PostReqData = {
    boardId: boardType,
    category: 'all',
    file: false,
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
