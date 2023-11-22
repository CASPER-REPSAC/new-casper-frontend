import { DefaultButton } from '@src/components/common/defaultTag';
import { styled } from 'styled-components';

interface Props {
  onSubmit: () => void;
}

function WriteButtonSection({ onSubmit }: Props) {
  return (
    <Wrapper>
      <WriteButton size="large" color="green" onClick={onSubmit}>
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
