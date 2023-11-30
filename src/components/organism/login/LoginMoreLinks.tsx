import Link from 'next/link';
import { DefaultButton } from 'app/_components/common/defaultTag';
import { PATH } from 'app/_constants/urls';

function LoginMoreLinks() {
  return (
    <Link href={PATH.user.join.url}>
      <DefaultButton>회원가입</DefaultButton>
    </Link>
  );
}

export default LoginMoreLinks;
