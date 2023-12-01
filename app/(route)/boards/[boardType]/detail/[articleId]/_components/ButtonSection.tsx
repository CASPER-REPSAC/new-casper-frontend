import { DefaultButton } from 'app/_components/common';
import {
  useArticleDetail,
  useDeleteArticleMutation,
  useUpdateArticleMutation,
} from 'app/_hooks/apis/boards';
import { editableState } from 'app/_store/detailPageAtoms';
import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

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
    <Wrapper>
      {editable ? (
        <DefaultButton $size="small" onClick={completeModification}>
          완료
        </DefaultButton>
      ) : (
        <DefaultButton $size="small" onClick={changeEditMode}>
          수정
        </DefaultButton>
      )}

      <DefaultButton $color="red" $size="small" onClick={deleteArticle}>
        삭제
      </DefaultButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export default ButtonSection;
