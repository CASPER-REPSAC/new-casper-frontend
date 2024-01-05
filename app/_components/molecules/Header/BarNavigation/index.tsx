import { useRecoilValue } from 'recoil';
import { loginState } from '@app/_store/permissionAtoms';
import MemberMenu from './MemberMenu';
import BoardMenu from './BoardMenu';
import IntranetMenu from './IntranetMenu';
import MyPageMenu from './MyPageMenu';
import LogoutMenu from './LogoutMenu';
import LoginMenu from './LoginMenu';

interface Props {
  className?: string;
}

function BarNaviagtion({ className: additionalClassName }: Props) {
  const login = useRecoilValue(loginState);

  return (
    <div
      className={`flex h-full items-start justify-between ${additionalClassName}`}
    >
      <MemberMenu />
      <BoardMenu />
      <IntranetMenu />

      {login ? (
        <>
          <MyPageMenu />
          <LogoutMenu />
        </>
      ) : (
        <LoginMenu />
      )}
    </div>
  );
}

export default BarNaviagtion;
