import { UserIcon } from '@src/components/common/Icons';
import { MemberProfile } from '@src/types/memberTypes';
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface Props {
  profile: MemberProfile;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function MemberCard({ profile, onClick }: Props) {
  const { image, name, introduce } = profile;

  return (
    <Wrapper>
      <Card onClick={onClick}>
        {image ? (
          <ProfileImage src={image} alt="profile image" fill />
        ) : (
          <StyledUserIcon size={100} />
        )}
        <Detail>{introduce}</Detail>
      </Card>
      <Name>{name}</Name>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Card = styled.div`
  position: relative;
  transform: skewX(-14deg);
  height: 200px;
  width: 200px;
  margin: 0;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.surfaceAlt};
`;

const ProfileImage = styled(Image)`
  opacity: 1;
  position: relative;
  z-index: 0;
  &:hover {
    opacity: 0.2;
  }
  transition: opacity 0.2s ease;
`;

const Name = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.textDefault};
  text-align: center;
  pointer-events: none;
`;

const Detail = styled.div`
  font-size: 2rem;
`;

const StyledUserIcon = styled(UserIcon)`
  color: ${({ theme }) => theme.surfaceDefault};
`;

export default MemberCard;
