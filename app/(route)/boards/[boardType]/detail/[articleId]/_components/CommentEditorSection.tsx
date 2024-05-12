'use client';

import { useForm } from 'react-hook-form';
import { PLACEHOLDER } from '@app/_constants/label';
import { useCommentMutation } from '@app/_hooks/apis/boards';
import { CommentWriteRequest } from '@app/_types/boardTypes';
import { usePopup } from '@app/_hooks';
import { POPUP_MESSAGE } from '@app/_constants/message';
import { POPUP_DURATION } from '@app/_constants/duration';
import { Button } from '@app/_shadcn/components/ui/button';
import { Textarea } from '@app/_shadcn/components/ui/textarea';
import { useRecoilValue } from 'recoil';
import { loginState } from '@app/_store/permissionAtoms';
import { Label } from '@app/_shadcn/components/ui/label';
import { useId } from 'react';

interface Props {
  articleId: string;
}

function CommentEditorSection({ articleId }: Props) {
  const commentEditorId = useId();
  const isLoggedIn = useRecoilValue(loginState);
  const { mutate } = useCommentMutation(articleId);
  const { register, handleSubmit, reset } = useForm<CommentWriteRequest>();
  const { openAndDeletePopup } = usePopup();

  const commentRegister = register('text', {
    required: true,
  });

  const onValid = async ({ text }: CommentWriteRequest) => {
    mutate({ text });
    reset();
  };
  const inValid = () => {
    openAndDeletePopup({
      message: POPUP_MESSAGE.requiredComment,
      duration: POPUP_DURATION.medium,
    });
  };

  if (!isLoggedIn) return null;

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onValid, inValid)}
    >
      <Label className="text-lg" htmlFor={commentEditorId}>
        댓글
      </Label>
      <Textarea
        id={commentEditorId}
        {...commentRegister}
        placeholder={PLACEHOLDER.comment}
      />
      <div className="flex items-center justify-end">
        <Button type="submit" size="sm">
          추가
        </Button>
      </div>
    </form>
  );
}

export default CommentEditorSection;
