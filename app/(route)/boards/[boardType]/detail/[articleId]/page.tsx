import { getArticleDetail } from '@app/_service/article';
import { Divider } from '@nextui-org/react';
import {
  ButtonSection,
  ContentSection,
  CommentSection,
  AuthorSection,
  CommentEditorSection,
} from './_components';
import ClientFormProvider from './_components/ClientFormProvider';
import FileSection from './_components/FileSection';

export default async function ArticleDetailPage({
  params: { articleId },
}: {
  params: { articleId: string };
}) {
  const {
    article: { title, userId, content },
    files,
  } = await getArticleDetail(articleId);

  return (
    <ClientFormProvider>
      <div>
        <div className="flex items-center justify-between border-b py-2">
          <h1 className="w-full break-all text-4xl">{title}</h1>
          <ButtonSection articleId={articleId} userId={userId} />
        </div>
        <Divider />
        {files && files.length > 0 && <FileSection files={files} />}
        <ContentSection articleContent={content} />
        <div className="mb-32">
          <AuthorSection articleId={articleId} />
        </div>
        <div className="mb-20">
          <CommentEditorSection articleId={articleId} />
        </div>
        <CommentSection articleId={articleId} />
      </div>
    </ClientFormProvider>
  );
}
