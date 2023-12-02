import styled from 'styled-components';
import { PATH } from 'app/_constants/urls';
import { DefaultLink } from 'app/_components/common';

function LoginMoreLinks() {
  return (
    <Wrapper>
      <DefaultLink href={PATH.user.join.url}>회원가입</DefaultLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoginMoreLinks;
