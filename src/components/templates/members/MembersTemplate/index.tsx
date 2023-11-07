import {
  detailedMemberPopupState,
  selectedMemberState,
} from '@src/atoms/memberCardAtoms';
import MemberCard from '@src/components/molecules/MemberCard';
import DetailMemberPopup from '@src/components/organism/DetailMemberPopup';
import { MemberProfile } from '@src/types/memberTypes';
import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';

interface Props {
  memberList: MemberProfile[] | null;
}

function MembersTemplate({ memberList }: Props) {
  const setDetailedMemberPopupVisible = useSetRecoilState(
    detailedMemberPopupState,
  );
  const setSelectedMember = useSetRecoilState(selectedMemberState);
  const openDetailPopup = (memberProfile: MemberProfile) => {
    setDetailedMemberPopupVisible(true);
    setSelectedMember(memberProfile);
  };
  const closeDetailPopup = () => {
    setDetailedMemberPopupVisible(false);
  };

  return (
    <>
      <DetailMemberPopup onClick={closeDetailPopup} />
      <Cards>
        {memberList &&
          memberList.map((memberProfile) => {
            return (
              <MemberCard
                key={memberProfile.id}
                onClick={() => openDetailPopup(memberProfile)}
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
export default MembersTemplate;
