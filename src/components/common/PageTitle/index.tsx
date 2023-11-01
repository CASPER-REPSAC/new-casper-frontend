import useClient from '@src/hooks/useClient';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface Props {
  pageTitle: string;
}

function PageTitle({ pageTitle }: Props) {
  const router = useRouter();
  const path = router.asPath.replaceAll('/', ' > ');
  const isClient = useClient();

  return (
    <Wrapper>
      {isClient && (
        <>
          <Title>{pageTitle}</Title>
          <Sub>홈{path}</Sub>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.pageTitleSurface};
  height: 100px;
  width: 100vw;
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
