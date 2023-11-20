import {
  detailedMemberPopupState,
  selectedMemberState,
} from '@src/recoil/memberCardAtoms';
import CommonCenterWrapper from '@src/components/common/centerWrapper/CommonCenterWrapper';
import PageShadow from '@src/components/common/PageShadow';
import DetailMemberCard from '@src/components/organism/member/DetailMemberCard';
import { MouseEventHandler } from 'react';
import { useRecoilValue } from 'recoil';

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function DetailMemberPopup({ onClick }: Props) {
  const visible = useRecoilValue(detailedMemberPopupState);
  const selectedMember = useRecoilValue(selectedMemberState);

  return (
    <>
      {visible && selectedMember && (
        <PageShadow onClick={onClick}>
          <CommonCenterWrapper>
            <DetailMemberCard
              onClick={(e) => {
                e.stopPropagation();
              }}
              memberProfile={selectedMember}
            />
          </CommonCenterWrapper>
        </PageShadow>
      )}
    </>
  );
}

export default DetailMemberPopup;
