import DefaultButton from '@src/components/common/defaultTag/DefaultButton';
import useArticleDetail from '@src/hooks/apis/boards/useArticleDetail';
import useDeleteArticleMutation from '@src/hooks/apis/boards/useDeleteArticleMutation';
import useUpdateArticleMutation from '@src/hooks/apis/boards/useUpdateArticleMutation';
import { editableState } from '@src/recoil/detailPageAtoms';
import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

function ButtonSection({ articleId }: { articleId: string }) {
  const methods = useFormContext();
  const [editable, setEditable] = useRecoilState(editableState);
  const { mutate: mutateDeletion } = useDeleteArticleMutation(articleId);
  const { mutateAsync: mutateUpdateAsync } =
    useUpdateArticleMutation(articleId);
  const { refetch } = useArticleDetail(articleId);

  const deleteArticle = () => {
    mutateDeletion();
  };
  const changeEditMode = () => {
    setEditable(true);
  };
  const completeModification = async () => {
    setEditable(false);
    await mutateUpdateAsync({
      articleId,
      title: methods.getValues('title'),
      content: methods.getValues('content'),
    });
    refetch();
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
