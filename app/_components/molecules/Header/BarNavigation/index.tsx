import { useRecoilValue } from 'recoil';
import { loginState, roleState } from '@app/_store/permissionAtoms';
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
  const role = useRecoilValue(roleState);

  return (
    <div
      className={`flex h-full items-start justify-between ${additionalClassName}`}
    >
      <MemberMenu />
      <BoardMenu />
      {(role === '관리자' || role === '정회원') && <IntranetMenu />}

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
