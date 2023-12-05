import { DefaultButton } from 'app/_components/common';
import {
  useDeleteArticleMutation,
  useUpdateArticleMutation,
} from 'app/_hooks/apis/boards';
import { editableState } from 'app/_store/detailPageAtoms';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

function ButtonSection({ articleId }: { articleId: string }) {
  const methods = useFormContext();
  const { refresh } = useRouter();

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
      title: methods.getValues('title'),
      content: methods.getValues('content'),
    });

    setEditable(false);
    refresh();
  };

  return (
    <div className="flex gap-4">
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
