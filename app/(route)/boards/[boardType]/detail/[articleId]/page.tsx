import { ClientFormProvider } from 'app/_components/molecules';
import { getArticleDetail } from 'app/_service/article';
import {
  ButtonSection,
  ContentSection,
  TitleSection,
  DetailComment,
  AuthorSection,
  CommentEditorSection,
  PageTemplate,
} from './_components';

export default async function ArticleDetailPage({
  params: { articleId },
}: {
  params: { articleId: string };
}) {
  const data = await getArticleDetail(articleId, true);

  return (
    <ClientFormProvider>
      <PageTemplate
        contentSection={<ContentSection articleContent={data.content} />}
        titleSection={<TitleSection articleTitle={data.title} />}
        titleButtonSection={<ButtonSection articleId={articleId} />}
        commentEditorSection={<CommentEditorSection />}
        authorSection={<AuthorSection nickname={data.nickname} />}
        commentSection={<DetailComment />}
      />
    </ClientFormProvider>
  );
}
