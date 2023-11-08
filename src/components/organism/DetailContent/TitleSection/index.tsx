import styled from 'styled-components';

interface Props {
  title: string;
}

function TitleSection({ title }: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
`;

const Title = styled.h1`
  font-size: 5rem;
`;

export default TitleSection;
