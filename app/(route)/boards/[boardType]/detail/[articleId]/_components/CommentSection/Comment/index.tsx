'use client';

import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { FormProvider, useForm } from 'react-hook-form';
import { myProfileState } from '@app/_store/permissionAtoms';
import Buttons from './Buttons';
import Content from './Content';
import Header from './Header';
import AvatarWithDialog from './AvatarWithDialog';

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
  const myProfile = useRecoilValue(myProfileState);
  const isMyComment = myProfile?.nickname === nickname;
  const isAdmin = myProfile?.role === 'admin';
  const methods = useForm({
    defaultValues: {
      comment: content,
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="flex items-start justify-between gap-8">
        <AvatarWithDialog nickname={nickname} profile={profile} id={authorId} />

        <div className="flex flex-1 flex-col">
          <Header nickname={nickname} date={date} />
          <Content comment={content} editable={editable} />
        </div>
        <div className="flex gap-4">
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
