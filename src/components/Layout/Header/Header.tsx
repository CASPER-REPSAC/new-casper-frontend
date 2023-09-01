import { isDarkState } from '@src/atoms';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { getCookie, removeCookie } from '@src/utils/cookies';
import NavItem from './NavItem';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import React from 'react';
import { useEffect, useState } from 'react';
import CommonCenterWrapper from '../CommonCenterWrapper/CommonCenterWrapper';
import { PATH } from '@src/utils/constants';
import styled from 'styled-components';

function Header() {
  const router = useRouter();
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const [isLogin, setLoginBool] = useState(false);
  const isHome = router.pathname === '/';
  const isDarkHome = isDark || isHome;
  const redirectHome = () => {
    router.push('/');
  };
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
    <Img src="/casper_logo_white.png" onClick={redirectHome} />
  ) : (
    <Img src="/casper_logo_black.png" onClick={redirectHome} />
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
          {/* 네비게이션 */}
          <NavItem subMenuInfo={PATH.member}>Members</NavItem>
          <NavItem subMenuInfo={PATH.board}>Boards</NavItem>
          {/* <NavItem
              menus={['Nas', 'Wiki', 'Recruit']}
              atag_url={[
                'https://nas.casper.or.kr/',
                'https://www.casper.or.kr/dokuwiki/doku.php',
                'https://recruit.casper.or.kr/',
              ]}
            >
              Intranet
            </NavItem> */}

          {/* {isLogin ? (
              <NavItem>
                <SlLock
                  color={isDarkHome ? 'white' : 'black'}
                  size={20}
                  onClick={LogoutFunc}
                ></SlLock>
              </NavItem>
            ) : (
              <NavItem pathInfo={PATH.user.login}>
                <SlLockOpen
                  color={isDarkHome ? 'white' : 'black'}
                  size={20}
                ></SlLockOpen>
              </NavItem>
            )}
            <NavItem path="/mypage">
              <AiOutlineUser
                color={isDarkHome ? 'white' : 'black'}
                size={24}
              ></AiOutlineUser>
            </NavItem> */}
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

export default React.memo(Header);
