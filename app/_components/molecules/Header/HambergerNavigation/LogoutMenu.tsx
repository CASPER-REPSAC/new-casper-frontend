import { DefaultButton } from '@app/_components/common';
import { LogoutIcon } from '@app/_components/icons';
import { useLogoutMutation } from '@app/_hooks/apis/user';

function LogoutMenu() {
  const { mutate: mutateLogout } = useLogoutMutation();

  const logout = () => {
    mutateLogout();
  };
  return (
    <DefaultButton onClick={logout}>
      <div className="flex-center gap-2">
        <LogoutIcon /> Logout
      </div>
    </DefaultButton>
  );
}

export default LogoutMenu;
