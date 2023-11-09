import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  buttons?: ReactNode;
}

function TitleSection({ title, buttons }: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {buttons && <ButtonSection>{buttons}</ButtonSection>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
`;

const Title = styled.h1`
  font-size: 5rem;
  flex-grow: 0;
  word-break: break-all;
`;
const ButtonSection = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
`;

export default TitleSection;
