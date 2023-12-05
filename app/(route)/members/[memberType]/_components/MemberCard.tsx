import { useRecoilState } from 'recoil';
import { MemberProfile } from 'app/_types/memberTypes';
import { Variants, motion } from 'framer-motion';
import { memo, useCallback } from 'react';
import {
  detailedMemberPopupState,
  selectedMemberState,
} from 'app/_store/memberCardAtoms';
import UserImage from './common/UserImage';

interface Props {
  member: MemberProfile;
}

function MemberCard({ member }: Props) {
  const { image, id, name } = member;

  const [, setPopupVisible] = useRecoilState(detailedMemberPopupState);
  const [, setSelectedMember] = useRecoilState(selectedMemberState);
  const openDetailPopup = useCallback(
    (clickedMember: MemberProfile) => {
      setPopupVisible(true);
      setSelectedMember(clickedMember);
    },
    [setPopupVisible, setSelectedMember],
  );

  return (
    <motion.div
      className="flex-center flex-col overflow-hidden rounded border border-solid border-sky-300 bg-white backdrop-blur dark:border-gray-600 dark:bg-black/50"
      variants={wrapperVariants}
      whileHover="animate"
      layoutId={`detail_popup_${id}`}
    >
      <UserImage
        src={image}
        layoutId={`${image}_${id}`}
        onClick={() => openDetailPopup(member)}
      />

      <div className="h-full py-2 text-center">{name}</div>
    </motion.div>
  );
}

const wrapperVariants: Variants = {
  animate: {
    scale: 1.1,
    rotate: 4,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 500,
    },
  },
};

export default memo(MemberCard);
