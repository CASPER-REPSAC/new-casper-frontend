import DefaultHr from '@src/components/common/DefaultHr';
import { PATH } from '@src/utils/urls';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import {
  AiOutlineMenu as MenuIcon,
  AiOutlineClose as CloseIcon,
  AiOutlineLogout as LogoutIcon,
  AiOutlineLogin as LoginIcon,
  AiOutlineUser as UserIcon,
} from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import { loginState } from '@src/atoms';

function HambergerNavigation() {
  const isLogin = useRecoilValue(loginState);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Wrapper onClick={toggleMenu}>
        <ToggleButton>
          {isOpen ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
        </ToggleButton>
      </Wrapper>
      {isOpen && (
        <FakeBackground onClick={closeMenu}>
          <Menu onClick={(e) => e.stopPropagation()}>
            {isLogin ? (
              <>
                <Item href={`${PATH.user.mypage.url}`}>
                  <UserIcon />
                </Item>
                <Item href={`${PATH.user.mypage.url}`}>
                  <LogoutIcon />
                </Item>
              </>
            ) : (
              <Item href={`${PATH.user.mypage.url}`}>
                <LoginIcon />
              </Item>
            )}
            <Hr />
            <PointText>게시판</PointText>
            <Hr />
            <Item href={`${PATH.boards.notice.url}/list/1`}>
              {PATH.boards.notice.name}
            </Item>
            <Item href={`${PATH.boards.full.url}/list/1`}>
              {PATH.boards.full.name}
            </Item>
            <Item href={`${PATH.boards.associate.url}/list/1`}>
              {PATH.boards.associate.name}
            </Item>
            <Item href={`${PATH.boards.graduate.url}/list/1`}>
              {PATH.boards.graduate.name}
            </Item>
            <Hr />

            <PointText>멤버</PointText>
            <Hr />
            <Item href={`${PATH.members.active.url}`}>
              {PATH.members.active.name}
            </Item>
            <Item href={`${PATH.members.graduate.url}`}>
              {PATH.members.graduate.name}
            </Item>
            <Item href={`${PATH.members.rest.url}`}>
              {PATH.members.rest.name}
            </Item>
          </Menu>
        </FakeBackground>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: inline;
  }
`;

const ToggleButton = styled.button`
  color: white;
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 100vh;
  margin: 0;
  font-size: 2rem;
  padding: 0;
  padding-top: 40px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  gap: 20px;
`;
const Item = styled(Link)`
  font-size: 2.4rem;
  text-decoration: none;
  color: ${({ theme }) => theme.textDefault};
  font-weight: lighter;
`;
const FakeBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
`;
const PointText = styled.div`
  font-weight: bold;
  font-size: 3rem;
`;
const Hr = styled(DefaultHr)`
  width: 20%;
  margin: 0;
`;

export default HambergerNavigation;
