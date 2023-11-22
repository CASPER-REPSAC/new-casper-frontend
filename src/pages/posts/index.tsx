import {
  BoardTypeSelecSection,
  EditorSection,
  TitleSection,
  WriteButtonSection,
} from '@src/components/organism/post';
import { PostTemplate } from '@src/components/templates';
import { usePostArticleMutation } from '@src/hooks/apis/boards';
import { PostReqData } from '@src/types/PostTypes';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

function PostPage() {
  const methods = useForm<PostReqData>();
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
