import { PATH } from '@app/_constants/urls';
import { ICON_SIZE } from '@app/_constants/size';
import { DefaultLink } from '@app/_components/common';
import { UserIcon } from '@app/_components/icons';
import { usePathname } from 'next/navigation';
import BarNavMenu from './common/BarNavMenu';

function MyPageMenu() {
  const {
    user: { mypage },
  } = PATH;
  const pathname = usePathname();

  return (
    <BarNavMenu
      highlight={pathname.startsWith(mypage.url)}
      title={
        <DefaultLink className="w-full" href={mypage.url}>
          <UserIcon size={ICON_SIZE.small} />
        </DefaultLink>
      }
    />
  );
}

export default MyPageMenu;
