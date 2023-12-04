import { PostReqData } from 'app/_types/PostTypes';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
}

function PostFormProvider({ children }: Props) {
  const defaultValues: PostReqData = {
    boardId: 'notice_board',
    category: 'all',
    createdAt: '1111-01-01',
    modifiedAt: '1111-01-01',
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
