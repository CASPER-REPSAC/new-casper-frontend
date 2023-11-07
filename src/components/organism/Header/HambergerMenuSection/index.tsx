import DefaultHr from '@src/components/common/DefaultHr';
import { PATH } from '@src/constants/urls';
import Link from 'next/link';
import { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { loginState } from '@src/atoms';
import useLogoutMutation from '@src/hooks/apis/useLogoutMutation';
import { LoginIcon, LogoutIcon, UserIcon } from '@src/components/common/Icons';

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function HambergerMenuSection({ onClick }: Props) {
  const isLogin = useRecoilValue(loginState);
  const { mutate: mutateLogout } = useLogoutMutation();

  const logout = () => {
    mutateLogout();
  };

  return (
    <FakeBackground onClick={onClick}>
      <Menu onClick={(e) => e.stopPropagation()}>
        {isLogin ? (
          <>
            <Item href={`${PATH.user.mypage.url}`}>
              <UserIcon />
            </Item>
            <LogoutButton type="button" onClick={logout}>
              <LogoutIcon />
            </LogoutButton>
          </>
        ) : (
          <Item href={`${PATH.user.login.url}`}>
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
        <Item href={`${PATH.members.rest.url}`}>{PATH.members.rest.name}</Item>
      </Menu>
    </FakeBackground>
  );
}

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
  gap: 20px;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: saturate(180%) blur(15px);
  z-index: 3;
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

const LogoutButton = styled.button`
  color: ${({ theme }) => theme.textDefault};
`;

export default HambergerMenuSection;
