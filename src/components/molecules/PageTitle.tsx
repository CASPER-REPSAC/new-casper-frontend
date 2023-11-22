import { useRouter } from 'next/router';
import styled from 'styled-components';

interface Props {
  pageTitle: string;
}

function PageTitle({ pageTitle }: Props) {
  const { asPath, isReady } = useRouter();
  const path = asPath.replaceAll('/', ' > ');

  return (
    <Wrapper>
      <Title>{pageTitle}</Title>
      {isReady && <Sub>홈{path}</Sub>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.pageTitleSurface};
  height: 100px;
  width: 100%;
  color: ${(props) => props.theme.textStrong};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-bottom: 5rem;

  @media screen and (min-width: 1024px) {
    margin-bottom: 4rem;
    height: 120px;
  }
`;
const Title = styled.div`
  font-size: 4.8rem;
`;
const Sub = styled.div`
  font-size: 1.6rem;
  font-weight: lighter;
`;

export default PageTitle;
