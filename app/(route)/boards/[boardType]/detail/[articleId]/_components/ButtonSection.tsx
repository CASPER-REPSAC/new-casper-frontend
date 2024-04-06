'use client';

import {
  useDeleteArticleMutation,
  useUpdateArticleMutation,
} from '@app/_hooks/apis/boards';
import { editableStateFamily } from '@app/_store/detailPageAtoms';
import { myProfileState } from '@app/_store/permissionAtoms';
import { BoardDetailParams } from '@app/_types/boardTypes';
import { Button, ButtonGroup } from '@nextui-org/react';
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
    <ButtonGroup className="flex shrink-0">
      {editable ? (
        <Button
          variant="flat"
          size="sm"
          color="success"
          onClick={completeModification}
        >
          완료
        </Button>
      ) : (
        <Button
          variant="flat"
          size="sm"
          color="primary"
          onClick={changeEditMode}
        >
          수정
        </Button>
      )}

      <Button variant="flat" size="sm" color="danger" onClick={deleteArticle}>
        삭제
      </Button>
    </ButtonGroup>
  );
}

export default ButtonSection;
