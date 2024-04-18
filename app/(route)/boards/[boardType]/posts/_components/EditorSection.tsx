'use client';

import dynamic from 'next/dynamic';
import { Block } from '@blocknote/core';
import { usePopup } from '@app/_hooks';
import { ERROR_MESSAGE } from '@app/_constants/message';
import { POPUP_DURATION } from '@app/_constants/duration';
import { useFormContext } from 'react-hook-form';
import { Spinner } from '@nextui-org/react';

const BlockNote = dynamic(
  () => import('@app/_components/molecules/BlockNote'),
  {
    ssr: false,
    loading: () => (
      <div className="flex-center h-full w-full">
        <Spinner />
      </div>
    ),
  },
);

function EditorSection() {
  const { setValue } = useFormContext();

  const { openAndDeletePopup } = usePopup();

  const onEditorContentChange = async (blocks: Block[]) => {
    try {
      const content = await JSON.stringify(blocks);
      setValue('content', content);
    } catch {
      openAndDeletePopup({
        message: ERROR_MESSAGE.unknown,
        duration: POPUP_DURATION.medium,
      });
    }
  };

  return (
    <div className="h-[500px] overflow-scroll">
      <BlockNote onEditorChange={onEditorContentChange} />
    </div>
  );
}

export default EditorSection;
