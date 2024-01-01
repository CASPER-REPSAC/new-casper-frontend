import { PATH } from '@app/_constants/urls';
import { DefaultLink } from '@app/_components/common';

function LoginMoreLinks() {
  return (
    <div className="flex-center mt-4">
      <DefaultLink href={PATH.user.join.url}>회원가입</DefaultLink>
    </div>
  );
}

export default LoginMoreLinks;
