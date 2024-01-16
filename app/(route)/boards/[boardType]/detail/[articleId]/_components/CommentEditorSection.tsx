import { FormEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import { DefaultButton, DefaultTextarea } from '@app/_components/common';
import { PLACEHOLDER } from '@app/_constants/label';
import useCommentMutation from '@app/_hooks/apis/boards/useCommentMutation';
import { CommentRequest } from '@app/_types/boardTypes';

interface Props {
  articleId: string;
}

function CommentEditorSection({ articleId }: Props) {
  const { mutate } = useCommentMutation(articleId);
  const { register, handleSubmit } = useForm<CommentRequest>();

  const onValid = ({ text }: CommentRequest) => {
    mutate({ text });
  };

  const textareaAutosize: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const element = e.currentTarget;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const commentRegister = register('text', { onChange: textareaAutosize });

  return (
    <form onSubmit={handleSubmit(onValid)}>
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
