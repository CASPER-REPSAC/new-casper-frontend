'use client';

import { TElement } from '@udecode/plate';
import { useFormContext } from 'react-hook-form';
import { PlateEditor } from '@app/_components/molecules/PlateEditor';
import { CreateArticleForm } from '@app/_types/PostTypes';

function EditorSection() {
  const { setValue } = useFormContext<CreateArticleForm>();

  const onValueChange = (value: TElement[]) => {
    const valueString = JSON.stringify(value);
    setValue('content', valueString);
  };

  return (
    <PlateEditor onValueChange={onValueChange} className="min-h-[500px]" />
  );
}

export default EditorSection;
