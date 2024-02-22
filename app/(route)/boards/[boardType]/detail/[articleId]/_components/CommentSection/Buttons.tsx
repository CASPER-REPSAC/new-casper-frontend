import { DefaultButton } from '@app/_components/common';
import useCommentDelete from '@app/_hooks/apis/boards/useCommentDelete';
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
  const { mutate: mutateDelete } = useCommentDelete(articleId);

  const changeEditMode = () => {
    setEditable(!editable);
    setFocus('comment');
  };

  const modifyComment = () => {
    const { comment } = getValues();
    mutateUpdate({ text: comment, commentId });
    setEditable(false);
  };

  const deleteComment = () => {
    mutateDelete(commentId);
  };

  return (
    <>
      {editable ? (
        <DefaultButton size="sm" onClick={modifyComment}>
          완료
        </DefaultButton>
      ) : (
        <DefaultButton size="sm" onClick={changeEditMode}>
          수정
        </DefaultButton>
      )}

      <DefaultButton size="sm" theme="danger" onClick={deleteComment}>
        삭제
      </DefaultButton>
    </>
  );
}

export default Buttons;
