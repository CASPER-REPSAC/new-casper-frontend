import { Separator } from '@app/_shadcn/components/ui/separator';
import GoogleLoginButton from './GoogleLoginButton';
import GithubLoginButton from './GithubLoginButton';
import CasperLoginButton from './CasperLoginButton';

function SocialLoginSection() {
  return (
    <section className="mt-12">
      <Separator className="mb-12 flex w-full items-center justify-center">
        <span className="bg-background px-6 text-sm">
          Oauth로 3초만에 로그인하기
        </span>
      </Separator>
      <div className="flex flex-col gap-2">
        <CasperLoginButton />
        <GoogleLoginButton />
        <GithubLoginButton />
      </div>
    </section>
  );
}

export default SocialLoginSection;
