import dynamic from 'next/dynamic';
import { BlockNoteEditor } from '@blocknote/core';
import { ERROR_MESSAGE } from '@src/constants/message';
import { POPUP_DURATION } from '@src/constants/duration';
import { usePopup } from '@src/hooks';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { editableState } from '@src/recoil/detailPageAtoms';
import { useArticleDetail } from '@src/hooks/apis/boards';

const BlockNote = dynamic(
  () => import('@src/components/molecules/editor/BlockNote'),
  {
    ssr: false,
  },
);

interface Props {
  articleId: string;
}
function ContentSection({ articleId }: Props) {
  const { data: articleDetail } = useArticleDetail(articleId);
  const editable = useRecoilValue(editableState);
  const { setValue } = useFormContext();
  const { openAndDeletePopup } = usePopup();

  const onEditorContentChange = async (editor: BlockNoteEditor) => {
    try {
      const curContent = await JSON.stringify(editor.topLevelBlocks);
      setValue('content', curContent);
    } catch {
      openAndDeletePopup({
        message: ERROR_MESSAGE.unknown,
        duration: POPUP_DURATION.short,
      });
    }
  };

  const initialContent = articleDetail && JSON.parse(articleDetail.content);

  if (!articleDetail) return <>Loading</>;

  return (
    <BlockNote
      editable={editable}
      initialContent={initialContent}
      onEditorContentChange={onEditorContentChange}
    />
  );
}

export default ContentSection;
