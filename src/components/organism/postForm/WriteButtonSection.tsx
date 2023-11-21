import DefaultButton from '@src/components/common/defaultTag/DefaultButton';
import usePostArticleMutation from '@src/hooks/apis/boards/usePostArticleMutation';
import usePopup from '@src/hooks/usePopup';
import { PostReqData } from '@src/types/PostTypes';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

function WriteButtonSection() {
  const { handleSubmit } = useFormContext<PostReqData>();
  const { mutate } = usePostArticleMutation();

  const onValid: SubmitHandler<PostReqData> = async (data) => {
    console.log(data);
    mutate(data);
  };
  const onInvalid = () => {};

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
