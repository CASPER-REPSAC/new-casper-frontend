'use client';

import ButtonWithDialogCheck from '@app/_components/common/WithDialogCheck';
import {
  useDeleteArticleMutation,
  useUpdateArticleMutation,
} from '@app/_hooks/apis/boards';
import { Button } from '@app/_shadcn/components/ui/button';
import { editableStateFamily } from '@app/_store/detailPageAtoms';
import { myProfileState } from '@app/_store/permissionAtoms';
import { BoardDetailParams } from '@app/_types/boardTypes';
import { useParams } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';

interface Props {
  articleId: string;
  userId: string;
}

function ButtonSection({ articleId, userId }: Props) {
  const { getValues } = useFormContext();
  const myProfile = useRecoilValue(myProfileState);
  const params = useParams<BoardDetailParams>();
  const [editable, setEditable] = useRecoilState(editableStateFamily(params));
  const { mutate: mutateDeletion } = useDeleteArticleMutation(
    Number(articleId),
  );
  const { mutate: mutateUpdate } = useUpdateArticleMutation(Number(articleId));
  const isMine = myProfile?.id === userId;
  const isAdmin = myProfile?.role === 'admin';

  const deleteArticle = () => {
    mutateDeletion();
  };
  const changeEditMode = () => {
    setEditable(true);
  };

  const completeModification = async () => {
    mutateUpdate({
      articleId,
      title: getValues('title'),
      content: getValues('content'),
    });
    setEditable(false);
  };

  if (isMine || isAdmin)
    return (
      <div className="flex gap-2">
        {editable ? (
          <Button size="sm" variant="secondary" onClick={completeModification}>
            완료
          </Button>
        ) : (
          <Button size="sm" onClick={changeEditMode}>
            수정
          </Button>
        )}

        <ButtonWithDialogCheck
          title="게시글 삭제"
          description="정말 게시글을 삭제하시겠어요?"
          size="sm"
          variant="destructive"
          confirmVariant="destructive"
          onClick={deleteArticle}
        >
          삭제
        </ButtonWithDialogCheck>
      </div>
    );
}

export default ButtonSection;
