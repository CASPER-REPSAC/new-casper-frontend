import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { articleDeatilQueryOption } from '@app/_hooks/apis/boards/useArticleDetailQuery';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
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
  const queryClient = new QueryClient();
  const options = articleDeatilQueryOption(Number(articleId));
  const {
    article: { title, userId, createdAt },
    files,
  } = await queryClient.fetchQuery(options);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientFormProvider>
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

        <ContentSection />
        <AuthorSection articleId={articleId} />
        <CommentEditorSection articleId={articleId} />
        <CommentSection articleId={articleId} />
      </ClientFormProvider>
    </HydrationBoundary>
  );
}
