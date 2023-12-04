import { CasperLogo } from 'app/_components/common';
import { PATH } from 'app/_constants/urls';
import { useRouter } from 'next/navigation';

function Logo() {
  const { push } = useRouter();

  return (
    <div className="flex-center mb-4">
      <CasperLogo
        className="w-64 cursor-pointer"
        onClick={() => push(PATH.home.url)}
      />
    </div>
  );
}

export default Logo;
