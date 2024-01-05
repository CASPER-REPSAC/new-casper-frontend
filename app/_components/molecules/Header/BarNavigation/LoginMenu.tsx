import { PATH } from '@app/_constants/urls';
import { DefaultLink } from '@app/_components/common';
import { LoginIcon } from '@app/_components/icons';
import { ICON_SIZE } from '@app/_constants/size';
import { usePathname } from 'next/navigation';
import BarNavMenu from './BarNavMenu';

function LoginMenu() {
  const pathname = usePathname();

  return (
    <BarNavMenu
      highlight={pathname.startsWith(PATH.user.login.url)}
      title={
        <DefaultLink className="w-full" href={PATH.user.login.url}>
          <LoginIcon size={ICON_SIZE.small} />
        </DefaultLink>
      }
    />
  );
}

export default LoginMenu;
