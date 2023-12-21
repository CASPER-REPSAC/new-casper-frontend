import { JoinFormProvider, JoinFunnel, ProgressBar } from './_components';
import { NextButton } from './_components/JoinFunnel/_components';

function JoinPage() {
  return (
    <div className="small-center absolute-center flex flex-col justify-center gap-12">
      <JoinFormProvider>
        <ProgressBar />
        <div className="flex min-h-[240px] items-center">
          <JoinFunnel />
        </div>
        <NextButton />
      </JoinFormProvider>
    </div>
  );
}

export default JoinPage;
