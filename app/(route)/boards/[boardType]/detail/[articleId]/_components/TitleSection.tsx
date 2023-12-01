import styled from 'styled-components';

interface Props {
  articleTitle: string;
}

function TitleSection({ articleTitle }: Props) {
  return <Wrapper>{articleTitle}</Wrapper>;
}

const Wrapper = styled.h1`
  font-size: 5rem;
  flex-grow: 0;
  word-break: break-all;
`;

export default TitleSection;
