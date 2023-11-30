import { CasperLogo } from 'app/_components/common';
import { PATH } from 'app/_constants/urls';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

function Logo() {
  const { push } = useRouter();

  return (
    <Wrapper>
      <CasperLogo size="large" onClick={() => push(PATH.home.url)} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Logo;
