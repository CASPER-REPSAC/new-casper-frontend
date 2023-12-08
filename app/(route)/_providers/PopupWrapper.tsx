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
    <div className="fixed  right-0 top-20 z-popup mr-4 h-auto items-center gap-4 ">
      <AnimatePresence mode="popLayout">
        {popupList.map(({ key, message }) => (
          <div key={key} className="mb-2">
            <ToastPopup onClick={() => deletePopup(key)}>{message}</ToastPopup>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default memo(PopupWrapper);
