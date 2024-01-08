import { redirect } from 'next/navigation';
import { getAccessToken } from '@app/_utils/cookie';
import { PATH } from '@app/_constants/urls';
import {
  BoardTypeSelecSection,
  EditorSection,
  TitleSection,
  WriteButtonSection,
  PostFormProvider,
} from './_components';

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
        <WriteButtonSection />
      </PostFormProvider>
    </div>
  );
}

export default PostPage;
