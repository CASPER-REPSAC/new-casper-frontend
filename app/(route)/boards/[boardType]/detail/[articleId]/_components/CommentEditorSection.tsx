'use client';

import { useForm } from 'react-hook-form';
import { PLACEHOLDER } from '@app/_constants/label';
import { useCommentMutation, useComments } from '@app/_hooks/apis/boards';
import { CommentWriteRequest } from '@app/_types/boardTypes';
import { POPUP_MESSAGE, TOAST_TITLE } from '@app/_constants/message';
import { Button } from '@app/_shadcn/components/ui/button';
import { Textarea } from '@app/_shadcn/components/ui/textarea';

import { Label } from '@app/_shadcn/components/ui/label';
import { useId } from 'react';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';

interface Props {
  articleId: string;
}

function CommentEditorSection({ articleId }: Props) {
  const commentEditorId = useId();
  const { isLoggedIn } = useMyInfo();
  const { data: comments } = useComments(Number(articleId));
  const { mutate } = useCommentMutation(Number(articleId));
  const { register, handleSubmit, reset } = useForm<CommentWriteRequest>();
  const { toast } = useToast();

  const commentRegister = register('text', {
    required: true,
  });

  const onValid = async ({ text }: CommentWriteRequest) => {
    mutate({ text });
    reset();
  };
  const inValid = () => {
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: POPUP_MESSAGE.requiredComment,
    });
  };

  return (
    <form
      className="mb-20 flex flex-col gap-4"
      onSubmit={handleSubmit(onValid, inValid)}
    >
      <Label className="text-lg" htmlFor={commentEditorId}>
        댓글 {comments?.length || 0}개
      </Label>
      <Textarea
        disabled={!isLoggedIn}
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
