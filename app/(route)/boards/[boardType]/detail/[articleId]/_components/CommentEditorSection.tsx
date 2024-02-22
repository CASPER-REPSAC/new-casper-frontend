'use client';

import { useForm } from 'react-hook-form';
import { DefaultButton, DefaultTextarea } from '@app/_components/common';
import { PLACEHOLDER } from '@app/_constants/label';
import { useCommentMutation } from '@app/_hooks/apis/boards';
import { CommentWriteRequest } from '@app/_types/boardTypes';
import { usePopup } from '@app/_hooks';
import { POPUP_MESSAGE } from '@app/_constants/message';
import { POPUP_DURATION } from '@app/_constants/duration';
import textareaAutosize from '@app/_utils/textareaAutosize';

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
      <DefaultTextarea
        className="mb-4 resize-none rounded-none border-0 border-b bg-transparent focus:border-indigo-300 focus:ring-0 dark:bg-transparent dark:focus:border-slate-100"
        {...commentRegister}
        placeholder={PLACEHOLDER.comment}
        rows={1}
      />
      <div className="flex items-center justify-end">
        <DefaultButton type="submit" size="sm" theme="primary">
          추가
        </DefaultButton>
      </div>
    </form>
  );
}

export default CommentEditorSection;
