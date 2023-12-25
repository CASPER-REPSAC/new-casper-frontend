import { FormEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import { DefaultButton, DefaultTextarea } from '@app/_components/common';
import { PLACEHOLDER } from '@app/_constants/label';
import { usePopup } from '@app/_hooks';
import { POPUP_DURATION } from '@app/_constants/duration';

function CommentEditorSection() {
  const { register, handleSubmit } = useForm();
  const { openAndDeletePopup } = usePopup();
  const onValid = () => {
    openAndDeletePopup({
      message: '기능 구현 중이에요.',
      duration: POPUP_DURATION.medium,
    });
  };

  const textareaAutosize: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const element = e.currentTarget;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const commentRegister = register('comment', { onChange: textareaAutosize });

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
