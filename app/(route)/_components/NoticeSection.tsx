import { LightBulbIcon } from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';

function NoticeSection() {
  return (
    <div className="flex items-center text-2xl">
      <LightBulbIcon size={ICON_SIZE.large} color="yellow" />
      신입생 모집 기간입니다.
    </div>
  );
}

export default NoticeSection;
