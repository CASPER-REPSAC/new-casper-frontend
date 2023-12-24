import {
  JoinFormProvider,
  JoinFunnel,
  ProgressBar,
  NextButton,
} from './_components';

function JoinPage() {
  return (
    <div className="small-center absolute-center flex flex-col justify-center gap-12">
      <JoinFormProvider>
        <form className="flex min-h-[400px] flex-col items-center justify-between gap-4">
          <ProgressBar />
          <JoinFunnel />
          <NextButton />
        </form>
      </JoinFormProvider>
    </div>
  );
}

export default JoinPage;
