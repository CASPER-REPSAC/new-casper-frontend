import { redirect } from 'next/navigation';
import { getAccessToken } from '@app/_utils/cookie';
import { PATH } from '@app/_constants/urls';
import BoardTypeSelecSection from './_components/BoardTypeSelecSection';
import EditorSection from './_components/EditorSection';
import FileInputSection from './_components/FileInputSection';
import PostFormProvider from './_components/PostFormProvider';
import TitleSection from './_components/TitleSection';
import WriteButtonSection from './_components/WriteButtonSection';

function PostPage() {
  const accessToken = getAccessToken();

  if (!accessToken) {
    redirect(PATH.user.login.url);
  }

  return (
    <div className="flex flex-col gap-8">
      <PostFormProvider>
        <BoardTypeSelecSection />
        <TitleSection />
        <EditorSection />
        <FileInputSection />
        <WriteButtonSection />
      </PostFormProvider>
    </div>
  );
}

export default PostPage;
