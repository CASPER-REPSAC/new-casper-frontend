import { MouseEventHandler, ReactElement } from 'react';
import Image from 'next/image';
import { MemberProfile } from '@src/types/memberTypes';
import styled from 'styled-components';
import {
  CloseIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from '@src/components/common/Icons';
import { detailedMemberPopupState } from '@src/atoms/memberCardAtoms';
import { useSetRecoilState } from 'recoil';
import { ICON_SIZE } from '@src/constants/size';
import DefaultButton from '@src/components/common/DefaultButton';

interface Props {
  memberProfile: MemberProfile;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function DetailMemberCard({ memberProfile, onClick }: Props) {
  const { image, name, introduce, nickname, role, homepage, email } =
    memberProfile;
  const setDetailedMemberPopupVisible = useSetRecoilState(
    detailedMemberPopupState,
  );
  const closeDetailedMemberPopup = () => {
    setDetailedMemberPopupVisible(false);
  };

  return (
    <Wrapper onClick={onClick}>
      <DefaultButton>
        <StyledCloseIcon
          size={ICON_SIZE.medium}
          onClick={closeDetailedMemberPopup}
        />
      </DefaultButton>
      <ProfileImage>
        {image ? (
          <StyledImage src={image} fill alt="profile image" />
        ) : (
          <UserIcon size={100} color="black" />
        )}
      </ProfileImage>
      <TextSection>
        <DetailRow title="정보">
          <Row>
            <LargeText>{name}</LargeText>
            <SmallText>{nickname}</SmallText>
            <SmallText>{role}</SmallText>
          </Row>
        </DetailRow>

        <DetailRow title="소개">
          <MediumText>{introduce}</MediumText>
        </DetailRow>

        <DetailRow title="소셜 정보">
          <>
            <Row>
              <MailIcon size={ICON_SIZE.medium} />
              <SmallText>{email}</SmallText>
            </Row>
            {homepage && (
              <Row>
                <HomeIcon size={ICON_SIZE.medium} />
                <LinkText href={homepage}>{homepage}</LinkText>
              </Row>
            )}
          </>
        </DetailRow>
      </TextSection>
    </Wrapper>
  );
}

function DetailRow({
  title,
  children,
}: {
  title: string;
  children: ReactElement;
}) {
  return (
    <div>
      <PointText>{title}</PointText>
      {children}
    </div>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  width: 90%;
  max-height: 80vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 700px;
  }
`;
const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  left: 0px;
  top: 0px;

  @media screen and (min-width: 768px) {
    top: -50px;
    right: 0px;
    left: auto;
  }
  cursor: pointer;
`;
const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 140px;
  height: 140px;
  background-color: ${({ theme }) => theme.surfaceAlt};
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
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
  font-size: 2.4rem;
  font-weight: lighter;
`;
const LinkText = styled.a`
  font-size: 2rem;
  font-weight: lighter;
`;

const PointText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textPoint};
  border-bottom: 1px solid ${({ theme }) => theme.borderBold};
  padding-bottom: 4px;
  margin-bottom: 0.4em;
`;

export default DetailMemberCard;
