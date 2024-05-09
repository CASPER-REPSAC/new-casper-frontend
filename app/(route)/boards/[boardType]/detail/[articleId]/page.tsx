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

export default async function ArticleDetailPage({
  params: { articleId },
}: {
  params: { articleId: string };
}) {
  const {
    article: { title, userId, content, nickname },
  } = await getArticleDetail(articleId);

  return (
    <ClientFormProvider>
      <div>
        <div className="flex items-center justify-between py-2">
          <h1 className="w-full break-all text-4xl">{title}</h1>
          <ButtonSection articleId={articleId} userId={userId} />
        </div>
        <Divider />
        <ContentSection articleContent={content} />
        <div className="mb-32">
          <AuthorSection nickname={nickname} profile={userId} />
        </div>
        <div className="mb-20">
          <CommentEditorSection articleId={articleId} />
        </div>
        <CommentSection articleId={articleId} />
      </div>
    </ClientFormProvider>
  );
}
