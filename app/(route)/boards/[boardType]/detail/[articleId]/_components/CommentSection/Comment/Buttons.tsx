import ButtonWithDialogCheck from '@app/_components/common/WithDialogCheck';
import useCommentDelete from '@app/_hooks/apis/boards/useCommentDelete';
import useCommentUpdate from '@app/_hooks/apis/boards/useCommentUpdate';
import { Button } from '@app/_shadcn/components/ui/button';
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
  const { mutate: mutateUpdate } = useCommentUpdate(Number(articleId));
  const { mutate: mutateDelete } = useCommentDelete(Number(articleId));

  const changeEditMode = () => {
    setEditable(!editable);
    setFocus('comment');
  };

  const modifyComment = () => {
    const { comment } = getValues();
    mutateUpdate({ text: comment, commentId: Number(commentId) });
    setEditable(false);
  };

  const deleteComment = () => {
    mutateDelete(Number(commentId));
  };

  return (
    <>
      {editable ? (
        <Button size="sm" onClick={modifyComment}>
          완료
        </Button>
      ) : (
        <Button size="sm" onClick={changeEditMode}>
          수정
        </Button>
      )}

      <ButtonWithDialogCheck
        title="댓글 삭제"
        description="정말 댓글을 삭제하시겠어요?"
        size="sm"
        variant="destructive"
        confirmVariant="destructive"
        onClick={deleteComment}
      >
        삭제
      </ButtonWithDialogCheck>
    </>
  );
}

export default Buttons;
