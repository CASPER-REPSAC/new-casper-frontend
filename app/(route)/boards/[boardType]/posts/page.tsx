import { redirect } from 'next/navigation';
import { getAccessToken } from '@app/_utils/cookie';
import { PATH } from '@app/_constants/urls';

import FileInputSection from './_components/FileInputSection';
import PostFormProvider from './_components/PostFormProvider';
import BoardTypeSelecSection from './_components/BoardTypeSelecSection';
import TitleSection from './_components/TitleSection';
import OptionSection from './_components/OptionSection';
import EditorSection from './_components/EditorSection';
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
        <OptionSection />
        <TitleSection />
        <EditorSection />
        <FileInputSection />
        <WriteButtonSection />
      </PostFormProvider>
    </div>
  );
}

export default PostPage;
