import { redirect } from 'next/navigation';
import { getAccessToken } from '@app/_utils/cookie';
import { PATH } from '@app/_constants/urls';
import {
  BoardTypeSelecSection,
  EditorSection,
  TitleSection,
  WriteButtonSection,
  PostFormProvider,
  OptionSection,
} from './_components';
import FileInputSection from './_components/FileInputSection';

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
