import MemberCard from '@src/components/molecules/MemberCard';
import DetailMemberPopup from '@src/components/organism/DetailMemberPopup';
import { MemberProfile } from '@src/types/memberTypes';
import { useState } from 'react';
import { styled } from 'styled-components';

interface Props {
  memberList: MemberProfile[];
}

function MembersSection({ memberList }: Props) {
  const [detailCardShow, setDetailMemberCardShow] = useState(false);
  const [selectedMember, setSelecteMember] = useState<MemberProfile>();
  const showDetail = (memberProfile: MemberProfile) => {
    setDetailMemberCardShow(true);
    setSelecteMember(memberProfile);
  };
  return (
    <>
      {detailCardShow && selectedMember && (
        <DetailMemberPopup
          onClick={() => setDetailMemberCardShow(false)}
          memberProfile={selectedMember}
        />
      )}
      <Cards>
        {memberList.map((memberProfile) => {
          return (
            <MemberCard
              key={memberProfile.id}
              onClick={() => showDetail(memberProfile)}
              profile={memberProfile}
            />
          );
        })}
      </Cards>
    </>
  );
}

export default MembersSection;

const Cards = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
