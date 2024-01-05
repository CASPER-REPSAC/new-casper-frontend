import { DefaultLink } from '@app/_components/common';
import { UserIcon } from '@app/_components/icons';
import { PATH } from '@app/_constants/urls';

function MypageMenu() {
  return (
    <DefaultLink href={`${PATH.user.mypage.url}`}>
      <div className="flex-center gap-2">
        <UserIcon /> MyPage
      </div>
    </DefaultLink>
  );
}

export default MypageMenu;
