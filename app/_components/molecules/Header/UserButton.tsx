import { LogoutIcon, UserIcon } from '@app/_components/icons';
import { PATH } from '@app/_constants/urls';
import { useLogoutMutation } from '@app/_hooks/apis/user';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@app/_shadcn/components/ui/avatar';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@app/_shadcn/components/ui/dropdown-menu';
import { loginState, myProfileState } from '@app/_store/permissionAtoms';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

function UserButton() {
  const isLoggedIn = useRecoilValue(loginState);
  const myProfile = useRecoilValue(myProfileState);
  const { mutate } = useLogoutMutation();

  return (
    <>
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={myProfile.image} />
              <AvatarFallback className="text-xs">
                {myProfile.nickname}
              </AvatarFallback>
            </Avatar>
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
