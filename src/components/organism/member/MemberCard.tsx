import Image from 'next/image';
import styled from 'styled-components';
import { UserIcon } from '@src/components/common/icons';
import { MemberProfile } from '@src/types/memberTypes';
import { motion } from 'framer-motion';
import { MouseEventHandler, memo } from 'react';

interface Props {
  member: MemberProfile;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function MemberCard({ member, onClick }: Props) {
  const { id, name } = member;

  const image = '/test.jpg';

  return (
    <Wrapper layoutId={`detail_popup_${id}`}>
      <Card onClick={onClick} layoutId={`${image}_${id}`}>
        {image ? (
          <ProfileImage src={image} alt="profile image" fill />
        ) : (
          <StyledUserIcon size={100} />
        )}
      </Card>
      <Name>{name}</Name>
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.borderDefault};
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

const StyledUserIcon = styled(UserIcon)`
  color: ${({ theme }) => theme.surfaceDefault};
`;

export default memo(MemberCard);
