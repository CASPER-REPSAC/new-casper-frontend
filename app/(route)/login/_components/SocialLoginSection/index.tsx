import { Separator } from '@app/_shadcn/components/ui/separator';
import CasperLoginButton from './CasperLoginButton';
// import GithubLoginButton from './GithubLoginButton';
// import GoogleLoginButton from './GoogleLoginButton';

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
      </div>
    </section>
  );
}

export default SocialLoginSection;
