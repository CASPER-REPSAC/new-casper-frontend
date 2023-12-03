import { DefaultButton } from 'app/_components/common';
import Avatar from './common/Avatar';

function DetailComment() {
  return (
    <Comment
      name="박지성"
      date="2021.12.12 14:12:15"
      content="댓글 1번입니다."
    />
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
        <DefaultButton size="sm" theme="red">
          삭제
        </DefaultButton>
      </div>
    </div>
  );
}
export default DetailComment;
