import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { getArticleDetail } from '@app/_service/article';
import { Separator } from '@app/_shadcn/components/ui/separator';
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
    article: { title, userId, content, createdAt },
    files,
  } = await getArticleDetail(articleId);

  return (
    <ClientFormProvider>
      <div>
        <div className="flex items-center justify-between py-2">
          <h1 className="w-full break-all text-4xl">{title}</h1>
          <ButtonSection articleId={articleId} userId={userId} />
        </div>
        <Separator className="my-3" />
        <div className="flex w-full justify-between">
          <span className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ko,
            })}
          </span>
          {files && files.length > 0 && <FileSection files={files} />}
        </div>
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
