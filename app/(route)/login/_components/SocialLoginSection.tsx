import { GoogleIcon } from '@app/_components/icons';
import { Button } from '@app/_shadcn/components/ui/button';
import { Separator } from '@app/_shadcn/components/ui/separator';

function SocialLoginSection() {
  return (
    <section className="mt-12">
      <Separator className="mb-12 flex w-full items-center justify-center">
        <span className="bg-background px-6 text-sm">
          SNS로 3초만에 로그인하기
        </span>
      </Separator>
      <div className="flex flex-col gap-2">
        <Button size="lg" variant="outline" className="flex gap-4">
          <GoogleIcon size={24} />
          <span className="text-base">구글 계정으로 계속하기</span>
        </Button>
      </div>
    </section>
  );
}

export default SocialLoginSection;
