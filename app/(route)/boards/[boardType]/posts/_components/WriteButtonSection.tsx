import { usePostArticleMutation } from '@app/_hooks/apis/boards';
import { PostReqData } from '@app/_types/PostTypes';
import { Button } from '@nextui-org/react';
import { SubmitHandler, useFormContext } from 'react-hook-form';

function WriteButtonSection() {
  const { handleSubmit } = useFormContext<PostReqData>();
  const { mutate } = usePostArticleMutation();

  const onValid: SubmitHandler<PostReqData> = async (data) => {
    mutate(data);
  };

  return (
    <div className="flex">
      <Button
        className="w-full"
        color="primary"
        size="lg"
        onClick={handleSubmit(onValid)}
      >
        작성 하기
      </Button>
    </div>
  );
}

export default WriteButtonSection;
