import { styled } from 'styled-components';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { loginState } from '@src/recoil';
import { PATH } from '@src/constants/urls';
import { ICON_SIZE } from '@src/constants/size';
import { LoginIcon, LogoutIcon, UserIcon } from '@src/components/common/icons';
import BarNavMenu from '@src/components/molecules/Header/BarNavMenu';
import { useLogoutMutation } from '@src/hooks/apis/user';

function BarNavMenuSection() {
  const { push } = useRouter();
  const login = useRecoilValue(loginState);
  const { mutate: mutateLogout } = useLogoutMutation();

  const logout = () => mutateLogout();
  const redirectMypage = () => push(PATH.user.mypage.url);
  const redirectLoginPage = () => push(PATH.user.login.url);
  const pushToListFirstPage = (path: string) => push(`${path}/list/1`);

  return (
    <>
      <Wrapper>
        {/* <BarNavMenu onClick={() => push(ADMIN_PATH.home.url)}>
          <BarNavMenu.Title>ADMIN - 임시</BarNavMenu.Title>
        </BarNavMenu> */}

        <BarNavMenu>
          <BarNavMenu.Title onClick={() => push(PATH.members.active.url)}>
            Member
          </BarNavMenu.Title>
          <BarNavMenu.SubMenu
            title={PATH.members.active.name}
            href={PATH.members.active.url}
          />
          <BarNavMenu.SubMenu
            title={PATH.members.graduate.name}
            href={PATH.members.graduate.url}
          />
          <BarNavMenu.SubMenu
            title={PATH.members.rest.name}
            href={PATH.members.rest.url}
          />
        </BarNavMenu>
        <BarNavMenu>
          <BarNavMenu.Title
            onClick={() => pushToListFirstPage(PATH.boards.notice.url)}
          >
            Boards
          </BarNavMenu.Title>
          <BarNavMenu.SubMenu
            title={PATH.boards.notice.name}
            href={`${PATH.boards.notice.url}/list/1`}
          />
          <BarNavMenu.SubMenu
            title={PATH.boards.full.name}
            href={`${PATH.boards.full.url}/list/1`}
          />
          <BarNavMenu.SubMenu
            title={PATH.boards.graduate.name}
            href={`${PATH.boards.graduate.url}/list/1`}
          />
          <BarNavMenu.SubMenu
            title={PATH.boards.associate.name}
            href={`${PATH.boards.associate.url}/list/1`}
          />
        </BarNavMenu>

        <BarNavMenu>
          <BarNavMenu.Title>Intranet</BarNavMenu.Title>
          <BarNavMenu.SubMenu
            title={PATH.extra.nas.name}
            href={PATH.extra.nas.url}
          />
          <BarNavMenu.SubMenu
            title={PATH.extra.recruit.name}
            href={PATH.extra.recruit.url}
          />
          <BarNavMenu.SubMenu
            title={PATH.extra.wiki.name}
            href={PATH.extra.wiki.url}
          />
        </BarNavMenu>

        {login ? (
          <>
            <BarNavMenu>
              <BarNavMenu.Title onClick={redirectMypage}>
                <UserIcon size={ICON_SIZE.small} />
              </BarNavMenu.Title>
            </BarNavMenu>
            <BarNavMenu>
              <BarNavMenu.Title onClick={logout}>
                <LogoutIcon size={ICON_SIZE.small} />
              </BarNavMenu.Title>
            </BarNavMenu>
          </>
        ) : (
          <BarNavMenu>
            <BarNavMenu.Title onClick={redirectLoginPage}>
              <LoginIcon size={ICON_SIZE.small} />
            </BarNavMenu.Title>
          </BarNavMenu>
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

export default BarNavMenuSection;
