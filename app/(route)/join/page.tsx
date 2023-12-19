import { JoinFormProvider, JoinFunnel } from './_components';

function JoinPage() {
  return (
    <div className="small-center absolute-center">
      <JoinFormProvider>
        {/* <ProgressBar /> */}
        <JoinFunnel />
      </JoinFormProvider>
    </div>
  );
}

export default JoinPage;
