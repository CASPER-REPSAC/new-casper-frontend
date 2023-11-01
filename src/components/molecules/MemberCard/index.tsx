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
    <Wrapper onClick={onClick}>
      <ProfileImage src={image} alt="profile image" fill />
      <Name>{name}</Name>
      <Detail>{introduce}</Detail>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  transform: skewX(-18deg);
  height: 200px;
  width: 210px;
  margin: 0;
  cursor: pointer;
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
  font-size: 3rem;
  color: ${({ theme }) => theme.textDefault};
  position: absolute;
  text-align: center;
  bottom: 0;
  pointer-events: none;
`;

const Detail = styled.div`
  font-size: 2rem;
`;

export default MemberCard;
