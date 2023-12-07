'use client';

import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { popupListState } from 'app/_store';
import { AnimatePresence } from 'framer-motion';
import { usePopup } from 'app/_hooks';
import { ToastPopup } from 'app/_components/molecules';

function PopupWrapper() {
  const popupList = useRecoilValue(popupListState);
  const { deletePopup } = usePopup();

  return (
    <div className="fixed bottom-14 right-0 z-popup mr-4 flex flex-col items-center gap-4 lg:top-20">
      <AnimatePresence mode="popLayout">
        {popupList.map(({ key, message }) => (
          <ToastPopup key={key} onClick={() => deletePopup(key)}>
            {message}
          </ToastPopup>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default memo(PopupWrapper);
