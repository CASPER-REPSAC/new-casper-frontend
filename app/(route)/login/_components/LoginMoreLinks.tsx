import Link from 'next/link';
import { NEW_PATH, PATH } from '@app/_constants/urls';
import { Button } from '@app/_shadcn/components/ui/button';

function LoginMoreLinks() {
  return (
    <div className="flex-center mt-4">
      <Button asChild variant="link">
        <Link href={PATH.user.join.url}>회원가입</Link>
      </Button>
      <Button asChild variant="link">
        <Link href={NEW_PATH.idFind.url}>아이디 찾기</Link>
      </Button>
      <Button asChild variant="link">
        <Link href={NEW_PATH.passwordFind.url}>비밀번호 찾기</Link>
      </Button>
    </div>
  );
}

export default LoginMoreLinks;
