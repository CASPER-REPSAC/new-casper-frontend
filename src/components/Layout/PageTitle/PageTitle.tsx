import { useRouter } from 'next/router';
import styled from 'styled-components';

interface pageTitleProps {
  pageTitle: string;
}

function PageTitle({ pageTitle }: pageTitleProps) {
  const router = useRouter();
  const path = router.asPath.replaceAll('/', ' > ');

  return (
    <Wrapper>
      <Title>{pageTitle}</Title>
      <Sub>
        {'홈'}
        {path}
      </Sub>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.surfacePointDefault};
  height: 120px;
  width: 100vw;
  border-top: 1px solid ${(props) => props.theme.borderDefault};
  border-bottom: 1px solid ${(props) => props.theme.borderDefault};
  color: ${(props) => props.theme.textStrong};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-bottom: 3%;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
    left: -40px;
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
