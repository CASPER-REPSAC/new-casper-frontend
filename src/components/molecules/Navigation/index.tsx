import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';
import { useRecoilValue } from 'recoil';

import styled from 'styled-components';
import useLogoutMutation from '@src/hooks/apis/useLogoutMutation';
import HeaderMenu from '@src/components/common/HeaderMenu';
import HeaderSubMenu from '@src/components/common/HeaderSubMenu';
import { loginState } from '@src/atoms';
import { ADMIN_PATH, PATH } from '@src/utils/urls';
import { LoginIcon, LogoutIcon, UserIcon } from '@src/components/common/Icons';

interface Props {
  onMouseOver: MouseEventHandler<HTMLDivElement>;
  onMouseOut: MouseEventHandler<HTMLDivElement>;
}

function Navigation({ onMouseOver, onMouseOut }: Props) {
  const router = useRouter();
  const login = useRecoilValue(loginState);
  const { mutate: mutateLogout } = useLogoutMutation();

  const logout = () => mutateLogout();
  const redirectMypage = () => router.push(PATH.user.mypage.url);
  const redirectLoginPage = () => router.push(PATH.user.login.url);

  return (
    <Wrapper onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <HeaderMenu
        title="관리자-임시"
        onClick={() => router.push(ADMIN_PATH.home.url)}
      />
      <HeaderMenu
        title="Members"
        subMenus={
          <HeaderSubMenu>
            <HeaderSubMenu.Item href={PATH.members.active.url}>
              {PATH.members.active.name}
            </HeaderSubMenu.Item>
            <HeaderSubMenu.Item href={PATH.members.rest.url}>
              {PATH.members.rest.name}
            </HeaderSubMenu.Item>
            <HeaderSubMenu.Item href={PATH.members.graduate.url}>
              {PATH.members.graduate.name}
            </HeaderSubMenu.Item>
          </HeaderSubMenu>
        }
      />
      <HeaderMenu
        title="Boards"
        subMenus={
          <HeaderSubMenu>
            <HeaderSubMenu.Item href={`${PATH.boards.notice.url}/list/1`}>
              {PATH.boards.notice.name}
            </HeaderSubMenu.Item>
            <HeaderSubMenu.Item href={`${PATH.boards.full.url}/list/1`}>
              {PATH.boards.full.name}
            </HeaderSubMenu.Item>
            <HeaderSubMenu.Item href={`${PATH.boards.associate.url}/list/1`}>
              {PATH.boards.associate.name}
            </HeaderSubMenu.Item>
            <HeaderSubMenu.Item href={`${PATH.boards.graduate.url}/list/1`}>
              {PATH.boards.graduate.name}
            </HeaderSubMenu.Item>
          </HeaderSubMenu>
        }
      />

      <HeaderMenu
        title="Intranet"
        subMenus={
          <HeaderSubMenu>
            <HeaderSubMenu.Item href={PATH.extra.nas.url}>
              {PATH.extra.nas.name}
            </HeaderSubMenu.Item>
            <HeaderSubMenu.Item href={PATH.extra.recruit.url}>
              {PATH.extra.recruit.name}
            </HeaderSubMenu.Item>
            <HeaderSubMenu.Item href={PATH.extra.wiki.url}>
              {PATH.extra.wiki.name}
            </HeaderSubMenu.Item>
          </HeaderSubMenu>
        }
      />

      {login ? (
        <>
          <HeaderMenu
            icon={<StyledUserIcon size={20} />}
            onClick={redirectMypage}
          />
          <HeaderMenu icon={<StyledLogoutIcon size={20} />} onClick={logout} />
        </>
      ) : (
        <HeaderMenu
          icon={<StyledLoginIcon size={20} />}
          onClick={redirectLoginPage}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  position: relative;
  height: 100%;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const StyledUserIcon = styled(UserIcon)``;
const StyledLoginIcon = styled(LoginIcon)`
  cursor: pointer;
`;
const StyledLogoutIcon = styled(LogoutIcon)`
  cursor: pointer;
`;
export default Navigation;
