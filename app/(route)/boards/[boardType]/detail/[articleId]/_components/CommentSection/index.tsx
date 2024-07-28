'use client';

import { useComments } from '@app/_hooks/apis/boards';
import Spinner from '@app/_components/Spinner';
import Comment from './Comment';

interface Props {
  articleId: string;
}

function CommentSection({ articleId }: Props) {
  const { data: comments, isLoading } = useComments(Number(articleId));

  if (isLoading) return <Spinner />;
  if (!comments) return <></>;

  return (
    <div className="flex flex-col-reverse gap-12">
      {comments.map(
        ({ id, nickname, modifiedAt, text, commentId, profile }) => (
          <Comment
            key={commentId}
            authorId={id}
            profile={profile}
            commentId={commentId.toString()}
            articleId={articleId}
            nickname={nickname}
            date={modifiedAt}
            content={text}
          />
        ),
      )}
    </div>
  );
}

export default CommentSection;
