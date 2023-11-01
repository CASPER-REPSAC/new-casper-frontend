import { MemberProfile } from '@src/types/memberTypes';
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface Props {
  memberProfile: MemberProfile;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function DetailMemberCard({ memberProfile, onClick }: Props) {
  const { image, name, introduce, nickname, role, homepage, email } =
    memberProfile;

  return (
    <Wrapper onClick={onClick}>
      <ProfileImage>
        <StyledImage src={image} fill alt="profile image" />
      </ProfileImage>
      <ColFlex>
        <PointText>정보</PointText>
        <Row>
          <LargeText>{name}</LargeText>
          <SmallText>{nickname}</SmallText>
          <SmallText>{role}</SmallText>
        </Row>
        <PointText>소개</PointText>

        <MediumText>{introduce}</MediumText>
        <PointText>소셜 정보</PointText>

        <SmallText>{homepage}</SmallText>
        <SmallText>{email}</SmallText>
      </ColFlex>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
const ProfileImage = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;
const ColFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 400px;
`;
const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2rem;
`;
const LargeText = styled.div`
  font-size: 3rem;
  font-weight: lighter;
`;
const SmallText = styled.div`
  font-size: 2rem;
  font-weight: lighter;
`;
const MediumText = styled.p`
  font-size: 2rem;
  font-weight: lighter;
`;

const PointText = styled.div`
  font-size: 3rem;
  margin-top: 50px;
  color: ${({ theme }) => theme.textPoint};
  border-bottom: 1px solid ${({ theme }) => theme.borderBold};
  padding-bottom: 4px;
`;

export default DetailMemberCard;
