import { styled } from 'styled-components';

function TitelSection() {
  return (
    <Title>
      <H1>THE CENTER</H1>
      <H1>of the SECURITY</H1>
      <H2>정보 보안 동아리 CASPER</H2>
    </Title>
  );
}

export default TitelSection;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
`;
const H1 = styled.div`
  font-size: 6rem;
  font-weight: bold;
  line-height: 0.9em;
  margin-bottom: 0.2em;
`;
const H2 = styled.div`
  font-size: 2.5rem;
  opacity: 0.8;
  font-weight: lighter;
`;
