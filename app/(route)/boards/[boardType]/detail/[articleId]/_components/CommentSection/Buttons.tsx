import { DefaultButton } from '@app/_components/common';
import useCommentUpdate from '@app/_hooks/apis/boards/useCommentUpdate';
import { Dispatch, SetStateAction } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  articleId: string;
  commentId: string;
  editable: boolean;
  setEditable: Dispatch<SetStateAction<boolean>>;
}

function Buttons({ articleId, commentId, editable, setEditable }: Props) {
  const { setFocus, getValues } = useFormContext();
  const { mutate: mutateUpdate } = useCommentUpdate(articleId);

  const changeEditMode = () => {
    setEditable(!editable);
    setFocus('comment');
  };

  const completeModification = () => {
    const { comment } = getValues();
    mutateUpdate({ text: comment, commentId });
    setEditable(false);
  };

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
