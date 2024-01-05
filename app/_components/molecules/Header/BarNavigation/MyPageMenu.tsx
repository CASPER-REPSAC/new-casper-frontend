import { PATH } from '@app/_constants/urls';
import { ICON_SIZE } from '@app/_constants/size';
import { DefaultLink } from '@app/_components/common';
import { UserIcon } from '@app/_components/icons';
import { usePathname } from 'next/navigation';
import BarNavMenu from './BarNavMenu';

function MyPageMenu() {
  const pathname = usePathname();

  return (
    <BarNavMenu
      highlight={pathname.startsWith(PATH.user.mypage.url)}
      title={
        <DefaultLink className="w-full" href={PATH.user.mypage.url}>
          <UserIcon size={ICON_SIZE.small} />
        </DefaultLink>
      }
    />
  );
}

export default MyPageMenu;
