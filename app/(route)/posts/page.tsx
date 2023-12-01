import {
  BoardTypeSelecSection,
  EditorSection,
  TitleSection,
  WriteButtonSection,
  PageWrapper,
  PostFormProvider,
} from './_components';

function PostPage() {
  return (
    <PageWrapper>
      <PostFormProvider>
        <BoardTypeSelecSection />
        <TitleSection />
        <EditorSection />
        <WriteButtonSection />
      </PostFormProvider>
    </PageWrapper>
  );
}

export default PostPage;
