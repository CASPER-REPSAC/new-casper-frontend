import { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  detailedMemberPopupState,
  selectedMemberState,
} from 'app/_store/memberCardAtoms';
import { PageShadow } from 'app/_components/common';
import Z_INDEX from 'app/_constants/zIndex';
import DetailPopupHeader from './DetailPopupHeader';
import DetailPopupImage from './DetailPopupImage';
import DetailDescription from './DetailDescription';

function DetailMemberPopup() {
  const selectedMember = useRecoilValue(selectedMemberState);
  const [visible, setVisible] = useRecoilState(detailedMemberPopupState);

  if (!selectedMember || !visible) return <></>;
  const { id } = selectedMember;

  const closePopup: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) setVisible(false);
  };

  return (
    <PageShadow onClick={closePopup}>
      <motion.div
        className={`before:z-[${Z_INDEX.detailCardBg}]before:bg-black/50 boder-solid relative flex max-h-[80vh] w-11/12 flex-col items-center gap-3 rounded border border-gray-600 px-4 py-2 before:left-0 before:top-0 before:h-full before:w-full before:backdrop-blur before:content-none sm:max-w-[700px]`}
        layoutId={`detail_popup_${id}`}
      >
        <DetailPopupHeader />
        <div className="flex-center w-full flex-col gap-8 sm:flex-row">
          <DetailPopupImage />
          <DetailDescription />
        </div>
      </motion.div>
    </PageShadow>
  );
}

export default DetailMemberPopup;
