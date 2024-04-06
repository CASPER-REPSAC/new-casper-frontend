'use client';

import { useForm } from 'react-hook-form';
import { PLACEHOLDER } from '@app/_constants/label';
import { useCommentMutation } from '@app/_hooks/apis/boards';
import { CommentWriteRequest } from '@app/_types/boardTypes';
import { usePopup } from '@app/_hooks';
import { POPUP_MESSAGE } from '@app/_constants/message';
import { POPUP_DURATION } from '@app/_constants/duration';
import textareaAutosize from '@app/_utils/textareaAutosize';
import { Button, Textarea } from '@nextui-org/react';

interface Props {
  articleId: string;
}

function CommentEditorSection({ articleId }: Props) {
  const { mutate } = useCommentMutation(articleId);
  const { register, handleSubmit, reset } = useForm<CommentWriteRequest>();
  const { openAndDeletePopup } = usePopup();

  const commentRegister = register('text', {
    onChange: textareaAutosize,
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

  return (
    <form onSubmit={handleSubmit(onValid, inValid)}>
      <Textarea
        variant="underlined"
        className="mb-4"
        {...commentRegister}
        placeholder={PLACEHOLDER.comment}
        rows={2}
      />
      <div className="flex items-center justify-end">
        <Button type="submit" size="sm" color="success" variant="flat">
          추가
        </Button>
      </div>
    </form>
  );
}

export default CommentEditorSection;
