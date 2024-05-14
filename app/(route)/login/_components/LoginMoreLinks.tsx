import { PATH } from '@app/_constants/urls';
import { Button } from '@app/_shadcn/components/ui/button';
import Link from 'next/link';

function LoginMoreLinks() {
  return (
    <div className="flex-center mt-4">
      <Button asChild variant="link">
        <Link href={PATH.user.join.url}>회원가입</Link>
      </Button>
    </div>
  );
}

export default LoginMoreLinks;
