import Link from 'next/link';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { isDarkState } from '@src/atoms';
import LoginForm from '@src/components/templates/login/LoginForm';
import styled from 'styled-components';
import { PATH } from '@src/constants/urls';
import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';

export default function Login() {
  const isDark = useRecoilValue(isDarkState);
  const logoSrc = isDark ? '/casper_logo_white.png' : '/casper_logo_black.png';

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImg src={logoSrc} alt="Casper logo" sizes="200px" fill priority />
      </LogoWrapper>
      <LoginForm />
      <RegisterLink href={PATH.user.join.url}>회원가입</RegisterLink>
    </Wrapper>
  );
}

const Wrapper = styled(CommonCenterWrapper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  font-size: 1.6rem;
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
