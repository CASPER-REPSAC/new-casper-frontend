import { DefaultButton } from 'app/_components/common';
import { usePostArticleMutation } from 'app/_hooks/apis/boards';
import { PostReqData } from 'app/_types/PostTypes';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

function WriteButtonSection() {
  const { handleSubmit } = useFormContext<PostReqData>();
  const { mutate } = usePostArticleMutation();

  const onValid: SubmitHandler<PostReqData> = async (data) => {
    mutate(data);
  };

  return (
    <Wrapper>
      <WriteButton $size="large" $color="green" onClick={handleSubmit(onValid)}>
        작성 하기
      </WriteButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const WriteButton = styled(DefaultButton)`
  width: 100%;
`;
export default WriteButtonSection;
