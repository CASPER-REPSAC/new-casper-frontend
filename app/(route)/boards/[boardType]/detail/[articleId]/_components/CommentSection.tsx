'use client';

import { useRecoilValue } from 'recoil';
import { DefaultButton } from '@app/_components/common';
import { useComments } from '@app/_hooks/apis/boards';
import { myProfileState } from '@app/_store/permissionAtoms';
import Avatar from './common/Avatar';

interface Props {
  articleId: string;
}

function CommentSection({ articleId }: Props) {
  const { data: comments } = useComments(articleId);

  if (!comments) return <>loading..</>;

  return (
    <div className="flex flex-col-reverse gap-4">
      {comments.map(({ nickname, modifiedAt, text, commentId }) => (
        <Comment
          key={commentId}
          nickname={nickname}
          date={modifiedAt}
          content={text}
        />
      ))}
    </div>
  );
}

interface CommentProps {
  nickname: string;
  date: string;
  content: string;
}

function Comment({ nickname, date, content }: CommentProps) {
  const myProfile = useRecoilValue(myProfileState);
  const isMyComment = myProfile?.nickname === nickname;

  return (
    <div className="flex items-start justify-between gap-8">
      <Avatar className="shrink-0" src="/defaultprofile.webp" />
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex items-end">
          <span className="mr-4">{nickname}</span>
          <span className="text-sm font-thin">{date}</span>
        </div>
        <div>{content}</div>
      </div>
      <div className="flex gap-4">
        {isMyComment && (
          <>
            <DefaultButton size="sm">수정</DefaultButton>
            <DefaultButton size="sm" theme="danger">
              삭제
            </DefaultButton>
          </>
        )}
      </div>
    </div>
  );
}
export default CommentSection;
