import { ClientFormProvider } from 'app/_components/molecules';
import { getArticleDetail } from 'app/_service/article';
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
        <div className="mb-4 flex items-center justify-between border-b border-solid border-gray-600">
          <h1 className="text-6xl">{data.title}</h1>
          <ButtonSection articleId={articleId} />
        </div>
        <div className="mb-8 min-h-[300px]">
          <ContentSection articleContent={data.content} />
        </div>
        <div className="mb-32">
          <AuthorSection nickname={data.nickname} />
        </div>
        <div className="mb-20">
          <CommentEditorSection />
        </div>
        <DetailComment />
      </div>
    </ClientFormProvider>
  );
}
