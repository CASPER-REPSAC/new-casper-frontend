import DefaultButton from '@src/components/common/defaultTag/DefaultButton';
import useDeleteArticleMutation from '@src/hooks/apis/boards/useDeleteArticleMutation';
import useUpdateArticleMutation from '@src/hooks/apis/boards/useUpdateArticleMutation';
import { editableState } from '@src/recoil/detailPageAtoms';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

function ButtonSection({ articleId }: { articleId: string }) {
  const { replace, asPath } = useRouter();
  const methods = useFormContext();
  const [editable, setEditable] = useRecoilState(editableState);
  const { mutate: mutateDeletion } = useDeleteArticleMutation(articleId);
  const { mutate: mutateUpdate } = useUpdateArticleMutation(articleId);

  const deleteArticle = () => {
    mutateDeletion();
  };
  const changeEditMode = () => {
    setEditable(true);
  };
  const completeModification = () => {
    mutateUpdate({
      title: methods.getValues('title'),
      content: methods.getValues('content'),
    });
    setEditable(false);
    replace(asPath);
  };
  return (
    <>
      {editable ? (
        <DefaultButton size="small" onClick={completeModification}>
          완료
        </DefaultButton>
      ) : (
        <DefaultButton size="small" onClick={changeEditMode}>
          수정
        </DefaultButton>
      )}

      <DefaultButton color="red" size="small" onClick={deleteArticle}>
        삭제
      </DefaultButton>
    </>
  );
}

export default ButtonSection;
