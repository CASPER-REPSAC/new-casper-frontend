import {
  BoardTypeSelecSection,
  EditorSection,
  TitleSection,
  WriteButtonSection,
  PostFormProvider,
} from './_components';

function PostPage() {
  return (
    <div className="flex flex-col gap-8">
      <PostFormProvider>
        <BoardTypeSelecSection />
        <TitleSection />
        <EditorSection />
        <WriteButtonSection />
      </PostFormProvider>
    </div>
  );
}

export default PostPage;
