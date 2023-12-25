import { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  detailedMemberPopupState,
  selectedMemberState,
} from '@app/_store/memberCardAtoms';
import { PageShadow } from '@app/_components/common';
import DetailPopupHeader from './DetailPopupHeader';
import DetailDescription from './DetailDescription';
import UserImage from '../common/UserImage';

function DetailMemberPopup() {
  const selectedMember = useRecoilValue(selectedMemberState);
  const [visible, setVisible] = useRecoilState(detailedMemberPopupState);

  if (!selectedMember || !visible) return <></>;
  const { image, id } = selectedMember;

  const closePopup: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) setVisible(false);
  };

  return (
    <PageShadow onClick={closePopup}>
      <motion.div
        className="flex w-[80vw] flex-col rounded border border-solid border-sky-300 bg-white p-10 dark:border-gray-600 dark:bg-black md:max-w-[700px] "
        layoutId={`detail_popup_${id}`}
      >
        <DetailPopupHeader />
        <div className="flex-center w-full flex-col gap-8 lg:flex-row">
          <UserImage src={image} layoutId={`${image}_${id}`} />{' '}
          <DetailDescription />
        </div>
      </motion.div>
    </PageShadow>
  );
}

export default DetailMemberPopup;
