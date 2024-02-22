'use client';

import { DefaultButton } from '@app/_components/common';
import {
  useDeleteArticleMutation,
  useUpdateArticleMutation,
} from '@app/_hooks/apis/boards';
import { editableState } from '@app/_store/detailPageAtoms';
import { myProfileState } from '@app/_store/permissionAtoms';
import { useFormContext } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';

interface Props {
  articleId: string;
  userId: string;
}

function ButtonSection({ articleId, userId }: Props) {
  const { getValues } = useFormContext();
  const myProfile = useRecoilValue(myProfileState);
  const [editable, setEditable] = useRecoilState(editableState);
  const { mutate: mutateDeletion } = useDeleteArticleMutation(articleId);
  const { mutate: mutateUpdate } = useUpdateArticleMutation(articleId);

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

  if (myProfile?.id !== userId) {
    return <></>;
  }

  return (
    <div className="flex shrink-0 gap-4">
      <DefaultButton
        size="sm"
        onClick={editable ? completeModification : changeEditMode}
      >
        {editable ? '완료' : '수정'}
      </DefaultButton>

      <DefaultButton size="sm" theme="danger" onClick={deleteArticle}>
        삭제
      </DefaultButton>
    </div>
  );
}

export default ButtonSection;
