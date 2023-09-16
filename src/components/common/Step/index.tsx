import { ReactNode } from 'react';
import styled from 'styled-components';
import DefaultButton from '../DefaultButton';

interface Props {
  children: ReactNode;
  onNext: () => void;
}

function Step({ children, onNext }: Props) {
  return (
    <Wrapper>
      {children}
      <NextButton type="large" full onClick={onNext}>
        다음 단계
      </NextButton>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const NextButton = styled(DefaultButton)`
  margin-top: 1em;
`;

export default Step;
