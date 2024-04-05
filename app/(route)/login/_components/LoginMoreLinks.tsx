import { PATH } from '@app/_constants/urls';
import { Link } from '@nextui-org/react';

function LoginMoreLinks() {
  return (
    <div className="flex-center mt-4">
      <Link color="foreground" isBlock href={PATH.user.join.url}>
        회원가입
      </Link>
    </div>
  );
}

export default LoginMoreLinks;
