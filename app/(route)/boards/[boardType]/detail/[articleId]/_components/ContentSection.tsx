'use client';

import dynamic from 'next/dynamic';
import { Block } from '@blocknote/core';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { editableStateFamily } from '@app/_store/detailPageAtoms';
import { Skeleton } from '@app/_components/common';
import { useParams } from 'next/navigation';
import { BoardDetailParams } from '@app/_types/boardTypes';

const BlockNote = dynamic(
  () => import('@app/_components/molecules/BlockNote'),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full flex-col gap-4 px-12 pt-4">
        <Skeleton className="h-4 w-full rounded-full" />
        <Skeleton className="h-4 w-1/3 rounded-full" />
        <Skeleton className="h-4 w-1/2 rounded-full" />
      </div>
    ),
  },
);

interface Props {
  articleContent: string;
}
function ContentSection({ articleContent }: Props) {
  const params = useParams<BoardDetailParams>();
  const editable = useRecoilValue(editableStateFamily(params));
  const { setValue } = useFormContext();

  const onEditorChange = async (blocks: Block[]) => {
    const blockString = await JSON.stringify(blocks);
    setValue('content', blockString);
  };

  const initialContent = JSON.parse(articleContent);

  return (
    <div className="mb-40 min-h-[300px]">
      <BlockNote
        editable={editable}
        onEditorChange={onEditorChange}
        initialContent={initialContent}
      />
    </div>
  );
}

export default ContentSection;
