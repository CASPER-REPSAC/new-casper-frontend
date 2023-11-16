import DefaultButton from '@src/components/common/DefaultButton';
import usePostArticleMutation from '@src/hooks/apis/boards/usePostArticleMutation';
import { PostReqData } from '@src/types/PostTypes';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

function WriteButtonSection() {
  const { handleSubmit } = useFormContext<PostReqData>();
  const { mutate } = usePostArticleMutation();

  const onValid: SubmitHandler<PostReqData> = async (data) => {
    mutate(data);
  };
  const onInvalid = () => {
    // alert('입력값을 확인해 주세요');
  };

  return (
    <Wrapper>
      <WriteButton
        size="large"
        color="green"
        onClick={handleSubmit(onValid, onInvalid)}
      >
        작성 하기
      </WriteButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
`;
const WriteButton = styled(DefaultButton)`
  width: 100%;
`;
export default WriteButtonSection;