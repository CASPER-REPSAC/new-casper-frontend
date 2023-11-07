import {
  detailedMemberPopupState,
  selectedMemberState,
} from '@src/atoms/memberCardAtoms';
import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';
import PageShadow from '@src/components/common/PageShadow';
import DetailMemberCard from '@src/components/molecules/DetailMemberCard';
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
