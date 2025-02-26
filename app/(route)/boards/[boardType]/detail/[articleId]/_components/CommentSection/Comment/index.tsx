'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import AvatarWithDialog from '@app/_components/user/AvatarWithDialog';
import Buttons from './Buttons';
import Content from './Content';
import Header from './Header';

interface CommentProps {
  authorId: string;
  articleId: string;
  commentId: string;
  nickname: string;
  date: string;
  content: string;
  profile: string;
}

function Comment({
  articleId,
  authorId,
  commentId,
  nickname,
  date,
  content,
  profile,
}: CommentProps) {
  const [editable, setEditable] = useState(false);
  const { data: myInfo } = useMyInfo();
  const isMyComment = myInfo?.nickname === nickname;
  const isAdmin = myInfo?.role === 'admin';
  const methods = useForm({
    defaultValues: {
      comment: content,
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="flex items-start justify-between gap-8">
        <AvatarWithDialog
          className="size-14"
          src={profile || undefined}
          fallback={nickname}
          rounded
          alt="profile"
          id={authorId}
        />

        <div className="flex flex-1 flex-col">
          <Header nickname={nickname} date={date} />
          <Content comment={content} editable={editable} />
        </div>
        <div className="flex gap-2">
          {(isMyComment || isAdmin) && (
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

export default Comment;
