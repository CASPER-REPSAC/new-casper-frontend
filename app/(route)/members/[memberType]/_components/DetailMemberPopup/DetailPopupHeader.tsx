import { DefaultButton } from 'app/_components/common';
import { CloseIcon } from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';
import { detailedMemberPopupState } from 'app/_store/memberCardAtoms';
import { useSetRecoilState } from 'recoil';

function DetailPopupHeader() {
  const setVisible = useSetRecoilState(detailedMemberPopupState);

  const closeDetailedMemberPopup = () => {
    setVisible(false);
  };

  return (
    <div className="flex w-full items-end justify-end">
      <DefaultButton onClick={closeDetailedMemberPopup}>
        <CloseIcon size={ICON_SIZE.small} />
      </DefaultButton>
    </div>
  );
}

export default DetailPopupHeader;
