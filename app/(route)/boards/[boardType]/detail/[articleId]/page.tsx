import { ClientFormProvider } from '@app/_components/molecules';
import { getArticleDetail } from '@app/_service/article';
import { Divider } from '@nextui-org/react';
import {
  ButtonSection,
  ContentSection,
  CommentSection,
  AuthorSection,
  CommentEditorSection,
} from './_components';

export default async function ArticleDetailPage({
  params: { articleId },
}: {
  params: { articleId: string };
}) {
  const data = await getArticleDetail(articleId);

  return (
    <ClientFormProvider>
      <div>
        <div className="flex items-center justify-between py-2">
          <h1 className="w-full break-all text-4xl">{data.title}</h1>
          <ButtonSection articleId={articleId} userId={data.userId} />
        </div>
        <Divider />
        <ContentSection articleContent={data.content} />
        <div className="mb-32">
          <AuthorSection nickname={data.nickname} profile={data.userId} />
        </div>
        <div className="mb-20">
          <CommentEditorSection articleId={articleId} />
        </div>
        <CommentSection articleId={articleId} />
      </div>
    </ClientFormProvider>
  );
}
