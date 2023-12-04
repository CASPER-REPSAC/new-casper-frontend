import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { MemberProfile } from 'app/_types/memberTypes';
import { Variants, motion } from 'framer-motion';
import { memo, useCallback } from 'react';
import {
  detailedMemberPopupState,
  selectedMemberState,
} from 'app/_store/memberCardAtoms';
import UserIcon from './common/UserIcon';

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
      className="flex-center flex-col gap-3 overflow-hidden rounded border border-solid border-gray-600 bg-black/50 backdrop-blur"
      variants={wrapperVariants}
      whileHover="animate"
      layoutId={`detail_popup_${id}`}
    >
      <motion.div
        className="flex-center relative h-52 w-52 cursor-pointer overflow-hidden rounded bg-gray-900 object-cover"
        onClick={() => openDetailPopup(member)}
        layoutId={`${image}_${id}`}
      >
        {image ? (
          <Image objectFit="cover" src={image} alt="profile image" fill />
        ) : (
          <UserIcon />
        )}
      </motion.div>
      <div className="pointer-events-none text-center">{name}</div>
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
