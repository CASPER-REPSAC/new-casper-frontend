import { HiLightBulb } from 'react-icons/hi';
import { styled } from 'styled-components';

function NoticeSection() {
  return (
    <Notice>
      <HiLightBulb size={40} color="yellow" />
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
