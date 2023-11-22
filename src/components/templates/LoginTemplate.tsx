import { SmallCenterWrapper } from '@src/components/common/centerWrapper';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  logoSection: ReactNode;
  loginFormSection: ReactNode;
  linkSection: ReactNode;
}

function LoginTemplate({ logoSection, loginFormSection, linkSection }: Props) {
  return (
    <Wrapper>
      <LogoSection>{logoSection}</LogoSection>
      <LoginFormSection>{loginFormSection}</LoginFormSection>
      <LinkSection>{linkSection}</LinkSection>
    </Wrapper>
  );
}

const Wrapper = styled(SmallCenterWrapper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginFormSection = styled.div``;
const LinkSection = styled.div`
  margin-top: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default LoginTemplate;
