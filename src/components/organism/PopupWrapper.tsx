import { styled } from 'styled-components';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { popupListState } from '@src/recoil';
import { AnimatePresence } from 'framer-motion';
import { ToastPopup } from '@src/components/molecules';
import { usePopup } from '@src/hooks';

function PopupWrapper() {
  const popupList = useRecoilValue(popupListState);
  const { deletePopup } = usePopup();

  return (
    <Wrapper>
      <AnimatePresence mode="popLayout">
        {popupList.map(({ key, message }) => (
          <ToastPopup
            key={key}
            message={message}
            onClick={() => deletePopup(key)}
          />
        ))}
      </AnimatePresence>
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
  gap: 1rem;
  margin-right: 1rem;
`;

export default memo(PopupWrapper);
