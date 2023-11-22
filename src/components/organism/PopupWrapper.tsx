import { popupListState } from '@src/recoil';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

function PopupWrapper() {
  const popupList = useRecoilValue(popupListState);

  return (
    <Wrapper>
      {popupList.map(({ key, message }) => (
        <ToastPopup key={key}>{message}</ToastPopup>
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

const ToastPopup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  width: 200px;
  min-height: 60px;
  background-color: ${({ theme }) => theme.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.white};
`;

export default memo(PopupWrapper);
