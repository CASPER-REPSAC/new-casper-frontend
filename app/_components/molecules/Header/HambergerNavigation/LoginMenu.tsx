import { DefaultLink } from '@app/_components/common';
import { LoginIcon } from '@app/_components/icons';
import { PATH } from '@app/_constants/urls';

function LoginMenu() {
  return (
    <DefaultLink href={`${PATH.user.login.url}`}>
      <div className="flex-center gap-2">
        <LoginIcon /> Login
      </div>
    </DefaultLink>
  );
}

export default LoginMenu;
