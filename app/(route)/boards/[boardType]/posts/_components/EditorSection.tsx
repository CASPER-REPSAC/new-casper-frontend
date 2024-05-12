'use client';

import { PlateEditor } from '@app/_components/molecules/PlateEditor';
import { PostReqData } from '@app/_types/PostTypes';
import { TElement } from '@udecode/plate-common';
import { useFormContext } from 'react-hook-form';

function EditorSection() {
  const { setValue } = useFormContext<PostReqData>();

  const onValueChange = (value: TElement[]) => {
    const valueString = JSON.stringify(value);
    setValue('content', valueString);
  };

  return <PlateEditor onValueChange={onValueChange} />;
}

export default EditorSection;
