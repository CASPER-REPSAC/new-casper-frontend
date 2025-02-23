import Spinner from '@app/_components/Spinner';

function SsoLoginLoading() {
  return (
    <div className="flex-center fixed top-0 z-[9999] h-screen w-screen bg-black/40">
      <Spinner className="size-12" />
    </div>
  );
}

export default SsoLoginLoading;
