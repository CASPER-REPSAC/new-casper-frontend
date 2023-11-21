import {
  BoardTypeSelecSection,
  EditorSection,
  TitleSection,
  WriteButtonSection,
} from '@src/components/organism/postForm';
import PostTemplate from '@src/components/templates/boards/PostTemplate';

function PostPage() {
  return (
    <PostTemplate
      boardTypeSelectSeciton={<BoardTypeSelecSection />}
      titleSection={<TitleSection />}
      editorSection={<EditorSection />}
      buttonSection={<WriteButtonSection />}
    />
  );
}

export default PostPage;
