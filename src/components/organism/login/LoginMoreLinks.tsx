import Link from 'next/link';
import { DefaultButton } from '@src/components/common/defaultTag';
import { PATH } from '@src/constants/urls';

function LoginMoreLinks() {
  return (
    <Link href={PATH.user.join.url}>
      <DefaultButton>회원가입</DefaultButton>
    </Link>
  );
}

export default LoginMoreLinks;
