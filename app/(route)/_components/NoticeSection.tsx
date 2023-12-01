import { LightBulbIcon } from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';
import { styled } from 'styled-components';

function NoticeSection() {
  return (
    <Notice>
      <LightBulbIcon size={ICON_SIZE.large} color="yellow" />
      신입생 모집 기간입니다.
    </Notice>
  );
}

const Notice = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
`;

export default NoticeSection;
