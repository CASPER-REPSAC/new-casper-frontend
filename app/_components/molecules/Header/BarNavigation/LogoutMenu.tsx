import { DefaultButton } from '@app/_components/common';
import { LogoutIcon } from '@app/_components/icons';
import { ICON_SIZE } from '@app/_constants/size';
import { useLogoutMutation } from '@app/_hooks/apis/user';
import BarNavMenu from './common/BarNavMenu';

function LogoutMenu() {
  const { mutate: mutateLogout } = useLogoutMutation();
  const logout = () => {
    mutateLogout();
  };

  return (
    <BarNavMenu
      title={
        <DefaultButton onClick={logout}>
          <LogoutIcon size={ICON_SIZE.small} />
        </DefaultButton>
      }
    />
  );
}

export default LogoutMenu;
