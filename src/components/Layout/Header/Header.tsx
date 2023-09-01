import { memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { SlLockOpen, SlLock } from 'react-icons/sl';
import { AiOutlineUser } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { isDarkState } from '@src/atoms';
import { getCookie, removeCookie } from '@src/utils/cookies';
import { PATH } from '@src/utils/urls';
import { useRedirect } from '@src/hooks/useRedirect';
import CommonCenterWrapper from '../CommonCenterWrapper/CommonCenterWrapper';
import NavItem from './NavItem';

function Header() {
  const router = useRouter();
  const redirect = useRedirect();
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const [isLogin, setLoginBool] = useState(false);
  const isHome = router.pathname === '/';
  const isDarkHome = isDark || isHome;

  useEffect(() => {
    const getToken = getCookie('is_login');
    getToken ? setLoginBool(true) : setLoginBool(false);
  }, [isLogin]);

  const LogoutFunc = () => {
    removeCookie('is_login');
    alert('로그아웃 되었습니다.');
    location.reload();
  };

  const CasperLogo = isDarkHome ? (
    <Img src="/casper_logo_white.png" onClick={redirect(PATH.home.url)} />
  ) : (
    <Img src="/casper_logo_black.png" onClick={redirect(PATH.home.url)} />
  );
  const DarkModeButton = isDark ? (
    <BsFillMoonFill />
  ) : (
    <BsFillSunFill color={isHome ? 'white' : 'black'} />
  );
  return (
    <HeaderWrapper>
      <Body>
        {CasperLogo}
        {DarkModeButton}

        <NavItems>
          <NavItem
            onClick={redirect(PATH.member.active.url)}
            subMenuInfo={PATH.member}
          >
            Members
          </NavItem>
          <NavItem
            onClick={redirect(PATH.board.active.url)}
            subMenuInfo={PATH.board}
          >
            Boards
          </NavItem>
          <NavItem subMenuInfo={PATH.extra}>Intranet</NavItem>

          {isLogin ? (
            <>
              <NavItem onClick={redirect(PATH.user.login.url)}>
                <SlLockOpen color={isDarkHome ? 'white' : 'black'} size={20} />
              </NavItem>
              <NavItem>
                <SlLock
                  color={isDarkHome ? 'white' : 'black'}
                  size={20}
                  onClick={LogoutFunc}
                />
              </NavItem>
            </>
          ) : (
            <NavItem onClick={redirect(PATH.user.login.url)}>
              <AiOutlineUser color={isDarkHome ? 'white' : 'black'} size={24} />
            </NavItem>
          )}
        </NavItems>
      </Body>
    </HeaderWrapper>
  );
}

const NavItems = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 0;
  width: 100vw;
  height: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0);
  z-index: 10;
  font-size: 2rem;
`;
const Body = styled(CommonCenterWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Img = styled.img`
  width: 170px;
  height: 36px;
  cursor: pointer;
`;

export default memo(Header);
