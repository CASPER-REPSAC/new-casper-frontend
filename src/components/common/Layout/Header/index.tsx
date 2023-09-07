import { memo } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { SlLockOpen, SlLock } from 'react-icons/sl';
import { AiOutlineUser } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import useRedirect from '@src/hooks/useRedirect';
import { ADMIN_PATH, PATH } from '@src/utils/urls';
import { isDarkState } from '@src/atoms';
import CommonCenterWrapper from '../CommonCenterWrapper';
import NavItem from './NavItem';

function Header() {
  const router = useRouter();
  const redirect = useRedirect();
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const isHome = router.pathname === '/';
  const isDarkHome = isDark || isHome;
  const logoSrc = isDarkHome
    ? '/casper_logo_white.png'
    : '/casper_logo_black.png';

  const toggleDarkMode = () => {
    setIsDark((cur) => !cur);
  };

  const DarkModeButtonIcon = isDark ? (
    <BsFillMoonFill color={isDarkHome ? 'white' : 'black'} />
  ) : (
    <BsFillSunFill color={isDarkHome ? 'white' : 'black'} />
  );

  return (
    <HeaderWrapper>
      <Body>
        <Img src={logoSrc} onClick={redirect(PATH.home.url)} />
        <DarkModeButton onClick={toggleDarkMode}>
          {DarkModeButtonIcon}
        </DarkModeButton>

        <NavItems>
          <NavItem onClick={redirect(ADMIN_PATH.home.url)}>
            {ADMIN_PATH.home.name}-임시
          </NavItem>
          <NavItem
            onClick={redirect(PATH.members.active.url)}
            subMenuInfo={PATH.members}
          >
            Members
          </NavItem>
          <NavItem
            onClick={redirect(PATH.boards.notice.url)}
            subMenuInfo={PATH.boards}
          >
            Boards
          </NavItem>
          <NavItem subMenuInfo={PATH.extra}>Intranet</NavItem>
          <NavItem onClick={redirect(PATH.user.login.url)}>
            <SlLockOpen color={isDarkHome ? 'white' : 'black'} size={20} />
          </NavItem>
          <NavItem>
            <SlLock color={isDarkHome ? 'white' : 'black'} size={20} />
          </NavItem>
          <NavItem onClick={redirect(PATH.user.login.url)}>
            <AiOutlineUser color={isDarkHome ? 'white' : 'black'} size={24} />
          </NavItem>
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

const DarkModeButton = styled.button``;

export default memo(Header);
