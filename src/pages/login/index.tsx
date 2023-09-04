import Link from 'next/link';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { isDarkState } from '@src/atoms';
import styled from 'styled-components';
import LoginForm from '@src/components/pages/login/LoginForm';

export default function Login() {
  const isDark = useRecoilValue(isDarkState);
  const logoSrc = isDark ? '/casper_logo_white.png' : '/casper_logo_black.png';

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImg src={logoSrc} alt="Casper logo" sizes="200px" fill priority />
      </LogoWrapper>
      <LoginForm />
      <RegisterLink href="/login/register">You don&#39;t have ID?</RegisterLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 84px;
`;
const LogoImg = styled(Image)`
  object-fit: contain;
`;

const RegisterLink = styled(Link)`
  margin-top: 1em;
  font-size: 2rem;
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
