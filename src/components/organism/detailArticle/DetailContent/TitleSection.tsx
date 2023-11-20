import styled from 'styled-components';

interface Props {
  title: string;
}

function TitleSection({ title }: Props) {
  return <Title>{title}</Title>;
}

const Title = styled.h1`
  font-size: 5rem;
  flex-grow: 0;
  word-break: break-all;
`;

export default TitleSection;
