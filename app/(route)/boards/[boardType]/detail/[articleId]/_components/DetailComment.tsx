import { DefaultButton } from '@app/_components/common';
import { getCommentList } from '@app/_service/article';
import Avatar from './common/Avatar';

interface Props {
  articleId: string;
}

async function DetailComment({ articleId }: Props) {
  const comments = await getCommentList(articleId);

  return (
    <div className="flex flex-col gap-4">
      {comments.map(({ nickname, modifiedAt, text }) => (
        <Comment name={nickname} date={modifiedAt} content={text} />
      ))}
    </div>
  );
}

interface CommentProps {
  name: string;
  date: string;
  content: string;
}

function Comment({ name, date, content }: CommentProps) {
  return (
    <div className="flex items-start justify-between gap-8">
      <Avatar className="shrink-0" src="/defaultprofile.webp" />
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex items-end">
          <span className="mr-4">{name}</span>
          <span className="text-sm font-thin">{date}</span>
        </div>
        <div>{content}</div>
      </div>
      <div className="flex gap-4">
        <DefaultButton size="sm">수정</DefaultButton>
        <DefaultButton size="sm" theme="danger">
          삭제
        </DefaultButton>
      </div>
    </div>
  );
}
export default DetailComment;
