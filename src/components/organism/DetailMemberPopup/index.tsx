import PageShadow from '@src/components/common/PageShadow';
import DetailMemberCard from '@src/components/molecules/DetailMemberCard';
import { MemberProfile } from '@src/types/memberTypes';
import { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface Props {
  memberProfile: MemberProfile;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function DetailMemberPopup({ memberProfile, onClick }: Props) {
  return (
    <PageShadow onClick={onClick}>
      <CenterWrapper>
        <DetailMemberCard memberProfile={memberProfile} />
      </CenterWrapper>
    </PageShadow>
  );
}

const CenterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default DetailMemberPopup;
