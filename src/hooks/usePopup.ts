import { popupListState } from '@src/atoms';
import { Key } from 'react';
import { useSetRecoilState } from 'recoil';

export default function usePopup() {
  const setPopupList = useSetRecoilState(popupListState);

  const openPopup = ({ key, message }: { key: Key; message: string }) => {
    setPopupList((prev) => {
      const newList = [...prev];
      newList.push({ key, message });
      return newList;
    });
  };

  const deletePopup = (key: Key) => {
    setPopupList((prev) => {
      const filterd = prev.filter((element) => element.key !== key);
      return filterd;
    });
  };

  const openAndDeletePopup = ({
    key,
    message,
    time,
  }: {
    key: Key;
    message: string;
    time: number;
  }) => {
    openPopup({ key, message });
    setTimeout(() => {
      deletePopup(key);
    }, time);
  };

  return { openPopup, deletePopup, openAndDeletePopup };
}
