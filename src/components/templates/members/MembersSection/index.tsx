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

const Cards = styled.div`
  display: grid;
  margin: 0 auto;
  place-items: center;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px 10px;

  width: 400px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    width: 630px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    width: 630px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    width: 840px;
  }
`;
export default MembersSection;
