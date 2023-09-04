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

export default NoticeSection;

const Notice = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 500px;
  font-size: 2.5rem;
`;
