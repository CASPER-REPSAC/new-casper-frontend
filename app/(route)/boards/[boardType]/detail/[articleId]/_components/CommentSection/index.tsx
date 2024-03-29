'use client';

import { useRecoilValue } from 'recoil';
import { FormProvider, useForm } from 'react-hook-form';
import { useComments } from '@app/_hooks/apis/boards';
import { myProfileState } from '@app/_store/permissionAtoms';
import { useState } from 'react';
import Avatar from '../common/Avatar';
import Buttons from './Buttons';
import Content from './Content';
import Header from './Header';

interface Props {
  articleId: string;
}

function CommentSection({ articleId }: Props) {
  const { data: comments } = useComments(articleId);

  if (!comments) return <>loading..</>;

  return (
    <div className="flex flex-col-reverse gap-12">
      {comments.map(({ nickname, modifiedAt, text, commentId }) => (
        <Comment
          key={commentId}
          commentId={commentId.toString()}
          articleId={articleId}
          nickname={nickname}
          date={modifiedAt}
          content={text}
        />
      ))}
    </div>
  );
}

interface CommentProps {
  articleId: string;
  commentId: string;
  nickname: string;
  date: string;
  content: string;
}

function Comment({
  articleId,
  commentId,
  nickname,
  date,
  content,
}: CommentProps) {
  const [editable, setEditable] = useState(false);
  const myProfile = useRecoilValue(myProfileState);
  const isMyComment = myProfile?.nickname === nickname;
  const methods = useForm({
    defaultValues: {
      comment: content,
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="flex items-start justify-between gap-8">
        <Avatar className="shrink-0" src="/defaultprofile.webp" />
        <div className="flex flex-1 flex-col">
          <Header nickname={nickname} date={date} />
          <Content comment={content} editable={editable} />
        </div>
        <div className="flex gap-4">
          {isMyComment && (
            <Buttons
              articleId={articleId}
              commentId={commentId}
              editable={editable}
              setEditable={setEditable}
            />
          )}
        </div>
      </div>
    </FormProvider>
  );
}
export default CommentSection;
