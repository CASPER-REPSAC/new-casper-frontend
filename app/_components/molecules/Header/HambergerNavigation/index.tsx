import { useRecoilValue } from 'recoil';
import { Variants, motion } from 'framer-motion';
import { loginState, roleState } from '@app/_store/permissionAtoms';
import MypageMenu from './MypageMenu';
import LoginMenu from './LoginMenu';
import MemberMenu from './MemberMenu';
import BoardsMenu from './BoardsMenu';
import LogoutMenu from './LogoutMenu';
import IntranetMenu from './IntranetMenu';

interface Props {
  onBgClick: () => void;
}

function HambergerNavigation({ onBgClick }: Props) {
  const isLogin = useRecoilValue(loginState);
  const role = useRecoilValue(roleState);

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
            <MypageMenu />
            <LogoutMenu />
          </>
        ) : (
          <LoginMenu />
        )}
        <BoardsMenu />
        <MemberMenu />

        {(role === '관리자' || role === '정회원') && <IntranetMenu />}
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
