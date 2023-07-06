import { isDarkState } from '@src/atoms';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import NavItem from './NavItem';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { SlLogin } from 'react-icons/sl';
import { AiOutlineUser } from 'react-icons/ai';
import React from 'react';
import {
  Body,
  DarkModeButton,
  Img,
  NavItems,
  HeaderWrapper,
} from './Header.style';

function Header() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const router = useRouter();
  const isHome = router.pathname === '/';
  const isDarkHome = isDark || isHome;

  const goHome = () => {
    router.push('/');
  };

  return (
    <HeaderWrapper>
      <Body>
        {/* 좌측 Logo */}
        {isDarkHome ? (
          <Img src="/casper_logo_white.png" onClick={goHome} />
        ) : (
          <Img src="/casper_logo_black.png" onClick={goHome} />
        )}

        {/* 다크모드 버튼 (임시)*/}
        <DarkModeButton onClick={() => setIsDark((cur) => !cur)}>
          {isDark ? (
            <BsFillMoonFill></BsFillMoonFill>
          ) : (
            <BsFillSunFill color={isHome ? 'white' : 'black'}></BsFillSunFill>
          )}
        </DarkModeButton>

        <NavItems>
          {/* 네비게이션 */}
          <NavItem
            path="/members/active"
            menus={['활동 중', '휴학생', '졸업생']}
            menus_url={[
              '/members/active',
              '/members/rest',
              '/members/graduate',
            ]}
          >
            Members
          </NavItem>
          <NavItem
            path="/album/2023"
            menus={['2023', '2022', '2021']}
            menus_url={['/album/2023', '/album/2022', '/album/2021']}
          >
            Album
          </NavItem>
          <NavItem
            path="/boards/notice_board"
            menus={['공지사항', '정회원 게시판', '준회원 게시판']}
            menus_url={[
              '/boards/notice_board',
              '/boards/full_member_board',
              '/boards/associate_member_board',
            ]}
          >
            Boards
          </NavItem>
          <NavItem
            menus={['Nas', 'Wiki', 'Recruit']}
            atag_url={[
              'https://nas.casper.or.kr/',
              'https://www.casper.or.kr/dokuwiki/doku.php',
              'https://recruit.casper.or.kr/',
            ]}
          >
            Intranet
          </NavItem>
          <NavItem path="/login">
            <SlLogin color={isDarkHome ? 'white' : 'black'} size={20}></SlLogin>
          </NavItem>
          <NavItem path="/mypage">
            <AiOutlineUser
              color={isDarkHome ? 'white' : 'black'}
              size={24}
            ></AiOutlineUser>
          </NavItem>
        </NavItems>
      </Body>
    </HeaderWrapper>
  );
}

export default React.memo(Header);
