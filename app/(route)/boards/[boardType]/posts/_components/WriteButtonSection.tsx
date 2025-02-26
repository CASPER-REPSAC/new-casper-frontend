'use client';

import { SubmitHandler, useFormContext } from 'react-hook-form';
import { usePostArticleMutation } from '@app/_hooks/apis/boards';
import { CreateArticleForm } from '@app/_types/PostTypes';
import { Button } from '@app/_shadcn/components/ui/button';

function WriteButtonSection() {
  const { handleSubmit } = useFormContext<CreateArticleForm>();
  const { mutate, isPending } = usePostArticleMutation();

  const onValid: SubmitHandler<CreateArticleForm> = async (data) => {
    mutate(data);
  };

  return (
    <div className="flex">
      <Button
        className="w-full"
        color="primary"
        size="lg"
        onClick={handleSubmit(onValid)}
        disabled={isPending}
      >
        작성 하기
      </Button>
    </div>
  );
}

export default WriteButtonSection;
