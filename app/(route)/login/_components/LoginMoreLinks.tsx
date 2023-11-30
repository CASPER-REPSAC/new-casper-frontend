import styled from 'styled-components';
import { PATH } from 'app/_constants/urls';
import { LinkButton } from '@src/components/common/featureTag';

function LoginMoreLinks() {
  return (
    <Wrapper>
      <LinkButton href={PATH.user.join.url}>회원가입</LinkButton>
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
