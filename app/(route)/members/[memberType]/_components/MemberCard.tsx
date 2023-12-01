import Image from 'next/image';
import styled from 'styled-components';
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
    <Wrapper
      variants={wrapperVariants}
      whileHover="animate"
      layoutId={`detail_popup_${id}`}
    >
      <Card onClick={() => openDetailPopup(member)} layoutId={`${image}_${id}`}>
        {image ? (
          <ProfileImage src={image} alt="profile image" fill />
        ) : (
          <UserIcon size={100} />
        )}
      </Card>
      <Name>{name}</Name>
    </Wrapper>
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

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  border-radius: 6px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
`;

const Card = styled(motion.div)`
  position: relative;
  height: 200px;
  width: 200px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.surfaceAlt};
  overflow: hidden;
  object-fit: cover;
`;

const ProfileImage = styled(Image)`
  opacity: 1;
  object-fit: cover;
`;

const Name = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.textDefault};
  text-align: center;
  pointer-events: none;
`;

export default memo(MemberCard);
