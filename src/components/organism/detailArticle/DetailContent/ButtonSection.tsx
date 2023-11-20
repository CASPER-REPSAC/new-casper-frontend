import DefaultButton from '@src/components/common/defaultTag/DefaultButton';

interface Props {
  editable: boolean;
  completeModification: () => void;
  changeEditMode: () => void;
  deleteArticle: () => void;
}

function ButtonSection({
  editable,
  completeModification,
  changeEditMode,
  deleteArticle,
}: Props) {
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
