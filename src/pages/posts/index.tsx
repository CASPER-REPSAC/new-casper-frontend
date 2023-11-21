import {
  BoardTypeSelecSection,
  EditorSection,
  TitleSection,
  WriteButtonSection,
} from '@src/components/organism/postForm';
import PostTemplate from '@src/components/templates/boards/PostTemplate';
import { PostReqData } from '@src/types/PostTypes';
import { FormProvider, useForm } from 'react-hook-form';

function PostPage() {
  const methods = useForm<PostReqData>();

  return (
    <FormProvider {...methods}>
      <PostTemplate
        boardTypeSelectSeciton={<BoardTypeSelecSection />}
        titleSection={<TitleSection />}
        editorSection={<EditorSection />}
        buttonSection={<WriteButtonSection />}
      />
    </FormProvider>
  );
}

export default PostPage;
