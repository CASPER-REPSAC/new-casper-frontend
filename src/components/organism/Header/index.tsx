import {
  accessTokenState,
  isDarkState,
  loginState,
  pageShadowState,
} from '@src/atoms';
import CommonCenterWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import LoadingProgressBar from '@src/components/common/LoadingProgressBar';
import NavItems from '@src/components/molecules/NavItems';
import useLogoutMutation from '@src/hooks/apis/useLogoutMutation';
import { PATH } from '@src/utils/urls';
import Z_INDEX from '@src/utils/zIndex';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  AiOutlineLogout as LogoutIcon,
  AiOutlineLogin as LoginIcon,
  AiOutlineUser as UserIcon,
} from 'react-icons/ai';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';

function Header() {
  const login = useRecoilValue(loginState);
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const setShadow = useSetRecoilState(pageShadowState);
  const router = useRouter();
  const { mutate: mutateLogout } = useLogoutMutation();

  const accessToken = useRecoilValue(accessTokenState); // 임시로직

  const isHome = router.pathname === '/';
  const isDarkHome = isDark || isHome;
  const logoSrc = isDarkHome
    ? '/casper_logo_white.png'
    : '/casper_logo_black.png';

  const logout = () => mutateLogout();
  const redirectMypage = () => router.push(PATH.user.mypage.url);
  const redirectLoginPage = () => router.push(PATH.user.login.url);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    console.log(accessToken); // 임시로직
  };

  return (
    <Wrapper>
      <CenterWrapper>
        <Logo onClick={() => router.push(PATH.home.url)}>
          <LogoImg src={logoSrc} alt="logo" fill />
        </Logo>

        <button type="button" onClick={toggleDarkMode}>
          dark/light
        </button>

        <NavSection>
          <NavItems
            onMouseOver={() => setShadow(true)}
            onMouseOut={() => setShadow(false)}
          />

          {login ? (
            <>
              <IconWrapper onClick={redirectMypage}>
                <StyledUserIcon size={20} />
              </IconWrapper>
              <IconWrapper onClick={logout}>
                <StyledLogoutIcon size={20} />
              </IconWrapper>
            </>
          ) : (
            <IconWrapper onClick={redirectLoginPage}>
              <StyledLoginIcon size={20} />
            </IconWrapper>
          )}
        </NavSection>
      </CenterWrapper>
      <LoadingProgressBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  z-index: ${Z_INDEX.header};

  width: 100vw;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
`;

const CenterWrapper = styled(CommonCenterWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const Logo = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  cursor: pointer;
`;
const LogoImg = styled(Image)`
  object-fit: contain;
`;
const NavSection = styled.div`
  display: flex;
  height: 100%;
`;
const IconWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 50px;
  cursor: pointer;
`;
const StyledUserIcon = styled(UserIcon)``;
const StyledLoginIcon = styled(LoginIcon)`
  cursor: pointer;
`;
const StyledLogoutIcon = styled(LogoutIcon)`
  cursor: pointer;
`;

export default Header;
