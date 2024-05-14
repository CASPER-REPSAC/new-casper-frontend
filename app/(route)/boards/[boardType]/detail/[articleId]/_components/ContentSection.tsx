'use client';

import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { editableStateFamily } from '@app/_store/detailPageAtoms';
import { useParams } from 'next/navigation';
import { BoardDetailParams } from '@app/_types/boardTypes';
import { PlateEditor } from '@app/_components/molecules/PlateEditor';
import { TElement } from '@udecode/plate-common';

interface Props {
  articleContent: string;
}

function ContentSection({ articleContent }: Props) {
  const params = useParams<BoardDetailParams>();
  const editable = useRecoilValue(editableStateFamily(params));
  const { setValue } = useFormContext();

  const onValueChange = (blocks: TElement[]) => {
    const valueString = JSON.stringify(blocks);
    setValue('content', valueString);
  };

  const initialValue: TElement[] = JSON.parse(articleContent);

  console.log('articleContent:', articleContent);

  return (
    <div className="mb-40 min-h-[300px] py-6">
      <PlateEditor
        readOnly={!editable}
        onValueChange={onValueChange}
        initialValue={initialValue}
      />
    </div>
  );
}

export default ContentSection;
