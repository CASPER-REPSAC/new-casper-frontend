import { ClientFormProvider } from '@app/_components/molecules';
import { getArticleDetail } from '@app/_service/article';
import {
  ButtonSection,
  ContentSection,
  DetailComment,
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
        <div className="mb-4 flex items-center justify-between border-b border-solid border-slate-300 py-2">
          <h1 className="text-4xl">{data.title}</h1>
          <ButtonSection articleId={articleId} userId={data.userId} />
        </div>
        <ContentSection articleContent={data.content} />
        <div className="mb-32">
          <AuthorSection nickname={data.nickname} />
        </div>
        <div className="mb-20">
          <CommentEditorSection articleId={articleId} />
        </div>
        <DetailComment />
      </div>
    </ClientFormProvider>
  );
}
