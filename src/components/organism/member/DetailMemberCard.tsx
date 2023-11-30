import { MouseEventHandler, ReactElement } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { CloseIcon, HomeIcon, MailIcon } from '@src/components/common/icons';
import { detailedMemberPopupState } from 'app/_recoil/memberCardAtoms';
import { useSetRecoilState } from 'recoil';
import { ICON_SIZE } from 'app/_constants/size';
import { DefaultButton } from 'app/_components/common/defaultTag';
import { motion } from 'framer-motion';
import { MemberProfile } from '@src/types/memberTypes';
import Z_INDEX from 'app/_constants/zIndex';
import { UserIcon } from './common';

interface Props {
  selectedMember: MemberProfile;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function DetailMemberCard({ onClick, selectedMember }: Props) {
  const setDetailedMemberPopupVisible = useSetRecoilState(
    detailedMemberPopupState,
  );

  const closeDetailedMemberPopup = () => {
    setDetailedMemberPopupVisible(false);
  };

  if (!selectedMember) return <></>;

  const { image, name, introduce, nickname, role, homepage, email, id } =
    selectedMember;

  return (
    <Wrapper onClick={onClick} layoutId={`detail_popup_${id}`}>
      <Header>
        <DefaultButton
          $size="small"
          $color="red"
          onClick={closeDetailedMemberPopup}
        >
          <CloseIcon size={ICON_SIZE.small} />
        </DefaultButton>
      </Header>

      <Body>
        <ProfileImage layoutId={`${image}_${id}`}>
          {image ? (
            <StyledImage src={image} fill alt="profile image" />
          ) : (
            <UserIcon size={100} />
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
      </Body>
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

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 90%;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  border-radius: 10px;
  padding: 3rem 5rem;
  max-height: 80vh;

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
    z-index: ${Z_INDEX.detailCardBg};
  }
`;
const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 7rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const ProfileImage = styled(motion.div)`
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
const StyledImage = styled(motion(Image))`
  object-fit: cover;
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
