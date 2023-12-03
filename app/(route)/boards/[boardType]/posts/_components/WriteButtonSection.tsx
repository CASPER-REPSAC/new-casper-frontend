import { DefaultButton } from 'app/_components/common';
import { usePostArticleMutation } from 'app/_hooks/apis/boards';
import { PostReqData } from 'app/_types/PostTypes';
import { SubmitHandler, useFormContext } from 'react-hook-form';

function WriteButtonSection() {
  const { handleSubmit } = useFormContext<PostReqData>();
  const { mutate } = usePostArticleMutation();

  const onValid: SubmitHandler<PostReqData> = async (data) => {
    mutate(data);
  };

  return (
    <div className="flex">
      <DefaultButton
        theme="green"
        className="w-full"
        size="lg"
        onClick={handleSubmit(onValid)}
      >
        작성 하기
      </DefaultButton>
    </div>
  );
}

export default WriteButtonSection;
