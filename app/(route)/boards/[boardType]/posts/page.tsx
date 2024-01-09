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

interface Props {
  params: { boardType: string };
}

function PostPage({ params }: Props) {
  const accessToken = getAccessToken();

  if (!accessToken) {
    redirect(PATH.user.login.url);
  }

  return (
    <div className="flex flex-col gap-8">
      <PostFormProvider boardType={params.boardType}>
        <BoardTypeSelecSection defaultValue={params.boardType} />
        <TitleSection />
        <EditorSection />
        <WriteButtonSection />
      </PostFormProvider>
    </div>
  );
}

export default PostPage;
