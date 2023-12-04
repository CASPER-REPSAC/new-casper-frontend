import { CasperLogo } from 'app/_components/common';
import { LightBulbIcon } from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';

function HomePage() {
  return (
    <div className="absolute-center flex flex-col gap-4 text-center">
      <div className="flex items-center text-2xl">
        <LightBulbIcon size={ICON_SIZE.large} color="yellow" />
        신입생 모집 기간입니다.
      </div>
      <h1 className="text-9xl font-bold">WELCOME !</h1>
      <CasperLogo className="h-20 w-32" />
    </div>
  );
}

export default HomePage;
