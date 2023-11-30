import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { loginState } from 'app/_recoil/permissionAtoms';
import { PATH } from 'app/_constants/urls';
import { ICON_SIZE } from 'app/_constants/size';
import { LoginIcon, LogoutIcon, UserIcon } from '@src/components/common/icons';
import BarNavMenu from 'app/_components/common/Header/BarNavigation/BarNavMenu';
import { useLogoutMutation } from 'app/_hooks/apis/user';
import { LinkButton } from '@src/components/common/featureTag';
import { DefaultButton } from 'app/_components/common/defaultTag';

function BarNaviagtion() {
  const login = useRecoilValue(loginState);
  const { mutate: mutateLogout } = useLogoutMutation();
  const logout = () => mutateLogout();
  const { members, boards, extra } = PATH;

  const memberMenus = Object.values(members).map(({ name, url }) => (
    <LinkButton key={name} $full href={url}>
      {name}
    </LinkButton>
  ));
  const boardsMenus = Object.values(boards).map(({ name, url }) => (
    <LinkButton key={name} $full href={`${url}/list/1`}>
      {name}
    </LinkButton>
  ));
  const intranetMenus = Object.values(extra).map(({ name, url }) => (
    <DefaultButton
      key={name}
      $full
      onClick={() => {
        window.location.href = url;
      }}
    >
      {name}
    </DefaultButton>
  ));

  return (
    <>
      <Wrapper>
        {/* <BarNavMenu onClick={() => push(ADMIN_PATH.home.url)}>
          <BarNavMenu.Title>ADMIN - 임시</BarNavMenu.Title>
        </BarNavMenu> */}

        <BarNavMenu
          title={
            <LinkButton $full href={members.active.url}>
              Members
            </LinkButton>
          }
          subMenus={memberMenus}
        />
        <BarNavMenu
          title={
            <LinkButton $full href={`${boards.notice.url}/list/1`}>
              Boards
            </LinkButton>
          }
          subMenus={boardsMenus}
        />
        <BarNavMenu
          title={<DefaultButton>Intranet</DefaultButton>}
          subMenus={intranetMenus}
        />

        {login ? (
          <>
            <BarNavMenu
              title={
                <LinkButton $full href={PATH.user.mypage.url}>
                  <UserIcon size={ICON_SIZE.small} />
                </LinkButton>
              }
            />
            <BarNavMenu
              title={
                <DefaultButton onClick={logout}>
                  <LogoutIcon size={ICON_SIZE.small} />
                </DefaultButton>
              }
            />
          </>
        ) : (
          <BarNavMenu
            title={
              <LinkButton $full href={PATH.user.login.url}>
                <LoginIcon size={ICON_SIZE.small} />
              </LinkButton>
            }
          />
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
`;

export default BarNaviagtion;
