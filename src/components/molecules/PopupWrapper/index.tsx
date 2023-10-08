import { popupListState } from '@src/atoms';
import ToastPopup from '@src/components/common/ToastPopup';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

function PopupWrapper() {
  const popupList = useRecoilValue(popupListState);

  return (
    <Wrapper>
      {popupList.map(({ key, message }) => (
        <ToastPopup key={key} message={message} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 70px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PopupWrapper;
