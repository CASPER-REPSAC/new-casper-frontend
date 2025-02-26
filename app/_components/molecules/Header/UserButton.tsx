import Link from 'next/link';
import { useLogoutMutation } from '@app/_hooks/apis/user';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import { LogoutIcon, UserIcon } from '@app/_components/icons';
import Avatar from '@app/_components/user/Avatar';
import { PATH } from '@app/_constants/urls';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@app/_shadcn/components/ui/dropdown-menu';

function UserButton() {
  const { mutate } = useLogoutMutation();

  const { data: myInfo, status } = useMyInfo();

  const isLoggedIn = status === 'success' && !!myInfo;

  return (
    <>
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar
              src={myInfo?.image}
              priority={false}
              alt="profile"
              fallback={myInfo?.nickname}
              rounded
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-24">
            <DropdownMenuGroup className="gap-4">
              <DropdownMenuItem asChild>
                <Link href={PATH.user.mypage.url}>
                  <UserIcon className="mr-2" />
                  <span>My page</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => mutate()}>
                <LogoutIcon className="mr-2" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button asChild>
          <Link href={PATH.user.login.url}>Login</Link>
        </Button>
      )}
    </>
  );
}

export default UserButton;
