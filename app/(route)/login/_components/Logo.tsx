import { CasperLogo } from 'app/_components/common';
import { PATH } from 'app/_constants/urls';
import { useRouter } from 'next/navigation';

function Logo() {
  const { push } = useRouter();

  return (
    <div className="flex-center mb-4">
      <button
        type="button"
        aria-label="logo"
        onClick={() => push(PATH.home.url)}
      >
        <CasperLogo size="lg" />
      </button>
    </div>
  );
}

export default Logo;
