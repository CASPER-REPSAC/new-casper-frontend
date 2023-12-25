import { useRecoilValue } from 'recoil';
import { usePathname } from 'next/navigation';
import { loginState } from '@app/_store/permissionAtoms';
import { PATH } from '@app/_constants/urls';
import { ICON_SIZE } from '@app/_constants/size';
import { LoginIcon, LogoutIcon, UserIcon } from '@app/_components/icons';
import { useLogoutMutation } from '@app/_hooks/apis/user';
import { DefaultLink, DefaultButton } from '@app/_components/common';
import BarNavMenu from './BarNavMenu';

interface Props {
  className?: string;
}

function BarNaviagtion({ className: additionalClassName }: Props) {
  const { members, boards, extra } = PATH;
  const pathname = usePathname();
  const login = useRecoilValue(loginState);
  const { mutate: mutateLogout } = useLogoutMutation();
  const logout = () => {
    mutateLogout();
  };

  const memberMenus = Object.values(members).map(({ name, url }) => (
    <DefaultLink key={name} className="w-full" href={url}>
      {name}
    </DefaultLink>
  ));
  const boardsMenus = Object.values(boards).map(({ name, url }) => (
    <DefaultLink key={name} className="w-full" href={`${url}/list/1`}>
      {name}
    </DefaultLink>
  ));
  const intranetMenus = Object.values(extra).map(({ name, url }) => (
    <DefaultButton
      key={name}
      className="w-full"
      onClick={() => {
        window.location.href = url;
      }}
    >
      {name}
    </DefaultButton>
  ));

  return (
    <div
      className={`flex h-full items-start justify-between ${additionalClassName}`}
    >
      {/* <BarNavMenu onClick={() => push(ADMIN_PATH.home.url)}>
          <BarNavMenu.Title>ADMIN - 임시</BarNavMenu.Title>
        </BarNavMenu> */}

      <BarNavMenu
        highlight={pathname.startsWith('/members')}
        title={
          <DefaultLink className="w-full" href={members.active.url}>
            Members
          </DefaultLink>
        }
        subMenus={memberMenus}
      />
      <BarNavMenu
        highlight={pathname.startsWith('/boards')}
        title={
          <DefaultLink className="w-full" href={`${boards.notice.url}/list/1`}>
            Boards
          </DefaultLink>
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
            highlight={pathname.startsWith(PATH.user.mypage.url)}
            title={
              <DefaultLink className="w-full" href={PATH.user.mypage.url}>
                <UserIcon size={ICON_SIZE.small} />
              </DefaultLink>
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
          highlight={pathname.startsWith(PATH.user.login.url)}
          title={
            <DefaultLink className="w-full" href={PATH.user.login.url}>
              <LoginIcon size={ICON_SIZE.small} />
            </DefaultLink>
          }
        />
      )}
    </div>
  );
}

export default BarNaviagtion;
