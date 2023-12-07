import { useRecoilValue } from 'recoil';
import { Variants, motion } from 'framer-motion';
import { DefaultButton, DefaultLink } from 'app/_components/common/';
import { LoginIcon, LogoutIcon, UserIcon } from 'app/_components/icons';
import { loginState } from 'app/_store/permissionAtoms';
import { useLogoutMutation } from 'app/_hooks/apis/user';
import { PATH } from 'app/_constants/urls';

interface Props {
  onBgClick: () => void;
}

function HambergerNavigation({ onBgClick }: Props) {
  const isLogin = useRecoilValue(loginState);
  const { mutate: mutateLogout } = useLogoutMutation();

  const logout = () => {
    mutateLogout();
  };

  return (
    <motion.div
      className="fixed left-0 top-0 z-hambergerMenu h-screen w-screen"
      variants={variants}
      initial="hidden"
      exit="hidden"
      animate="visible"
      onClick={(e) => {
        if (e.currentTarget === e.target) onBgClick();
      }}
    >
      <div className="flex h-screen w-2/3 flex-col items-center gap-4 bg-sky-100/10 pt-10 backdrop-blur-lg dark:bg-black/50">
        {isLogin ? (
          <>
            <DefaultLink href={`${PATH.user.mypage.url}`}>
              <div className="flex-center gap-2">
                <UserIcon /> MyPage
              </div>
            </DefaultLink>
            <DefaultButton onClick={logout}>
              <div className="flex-center gap-2">
                <LogoutIcon /> Logout
              </div>
            </DefaultButton>
          </>
        ) : (
          <DefaultLink href={`${PATH.user.login.url}`}>
            <div className="flex-center gap-2">
              <LoginIcon /> Login
            </div>
          </DefaultLink>
        )}
        <h1 className="text-3xl font-bold">Boards</h1>
        <div>
          <DefaultLink href={`${PATH.boards.notice.url}/list/1`}>
            {PATH.boards.notice.name}
          </DefaultLink>
          <DefaultLink href={`${PATH.boards.full.url}/list/1`}>
            {PATH.boards.full.name}
          </DefaultLink>
          <DefaultLink href={`${PATH.boards.associate.url}/list/1`}>
            {PATH.boards.associate.name}
          </DefaultLink>
          <DefaultLink href={`${PATH.boards.graduate.url}/list/1`}>
            {PATH.boards.graduate.name}
          </DefaultLink>
        </div>

        <h1 className="text-3xl font-bold">Member</h1>
        <div>
          <DefaultLink href={`${PATH.members.active.url}`}>
            {PATH.members.active.name}
          </DefaultLink>
          <DefaultLink href={`${PATH.members.graduate.url}`}>
            {PATH.members.graduate.name}
          </DefaultLink>
          <DefaultLink href={`${PATH.members.rest.url}`}>
            {PATH.members.rest.name}
          </DefaultLink>
        </div>
      </div>
    </motion.div>
  );
}

const variants: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
    },
  },
  hidden: { x: '-100vw', opacity: 0 },
};

export default HambergerNavigation;
