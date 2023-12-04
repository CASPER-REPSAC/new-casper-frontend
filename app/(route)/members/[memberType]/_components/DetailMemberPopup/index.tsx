import { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  detailedMemberPopupState,
  selectedMemberState,
} from 'app/_store/memberCardAtoms';
import { PageShadow } from 'app/_components/common';
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
        className="flex w-[80vw] flex-col rounded border border-solid border-gray-600 bg-black p-10 md:max-w-[700px] "
        layoutId={`detail_popup_${id}`}
      >
        <DetailPopupHeader />
        <div className="flex-center w-full flex-col gap-8 lg:flex-row">
          <DetailPopupImage />
          <DetailDescription />
        </div>
      </motion.div>
    </PageShadow>
  );
}

export default DetailMemberPopup;
