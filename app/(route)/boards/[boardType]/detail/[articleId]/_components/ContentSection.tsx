'use client';

import { TElement } from '@udecode/plate';
import { useAtomValue } from 'jotai';
import { useParams } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import useArticleDetailQuery from '@app/_hooks/apis/boards/useArticleDetailQuery';
import { PlateEditor } from '@app/_components/molecules/PlateEditor';
import { editableStateFamily } from '@app/_store/detailPageAtoms';
import { BoardDetailParams } from '@app/_types/boardTypes';

function ContentSection() {
  const params = useParams<BoardDetailParams>();
  const editable = useAtomValue(
    editableStateFamily({ id: params, editable: false }),
  );
  const { setValue } = useFormContext();
  const { data } = useArticleDetailQuery(Number(params.articleId));

  if (!data) return null;

  const onValueChange = (blocks: TElement[]) => {
    const valueString = JSON.stringify(blocks);
    setValue('content', valueString);
  };

  const initialValue: TElement[] = data?.article.content
    ? JSON.parse(data?.article.content)
    : undefined;

  return (
    <div className="mb-40 mt-4">
      <PlateEditor
        className=" min-h-[300px]"
        readOnly={!editable}
        onValueChange={onValueChange}
        value={initialValue}
      />
    </div>
  );
}

export default ContentSection;
