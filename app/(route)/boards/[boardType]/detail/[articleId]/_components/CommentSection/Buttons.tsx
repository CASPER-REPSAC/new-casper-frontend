import { DefaultButton } from '@app/_components/common';
import { Dispatch, SetStateAction } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  editable: boolean;
  setEditable: Dispatch<SetStateAction<boolean>>;
}

function Buttons({ editable, setEditable }: Props) {
  const { setFocus } = useFormContext();
  const changeEditMode = () => {
    setEditable(!editable);
    setFocus('comment');
  };

  const completeModification = () => {};

  return (
    <>
      {editable ? (
        <DefaultButton size="sm" onClick={completeModification}>
          완료
        </DefaultButton>
      ) : (
        <DefaultButton size="sm" onClick={changeEditMode}>
          수정
        </DefaultButton>
      )}

      <DefaultButton size="sm" theme="danger">
        삭제
      </DefaultButton>
    </>
  );
}

export default Buttons;
