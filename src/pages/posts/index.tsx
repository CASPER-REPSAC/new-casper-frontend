import {
  BoardTypeSelecSection,
  EditorSection,
  TitleSection,
  WriteButtonSection,
} from '@src/components/organism/post';
import { PostTemplate } from '@src/components/templates';
import { usePostArticleMutation } from 'app/_hooks/apis/boards';
import { PostReqData } from 'app/_types/PostTypes';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

function PostPage() {
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
  const { mutate } = usePostArticleMutation();
  const { handleSubmit } = methods;

  const onValid: SubmitHandler<PostReqData> = async (data) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <PostTemplate
        boardTypeSelectSeciton={<BoardTypeSelecSection />}
        titleSection={<TitleSection />}
        editorSection={<EditorSection />}
        buttonSection={<WriteButtonSection onSubmit={handleSubmit(onValid)} />}
      />
    </FormProvider>
  );
}

export default PostPage;
