'use client';

import { PostReqData } from '@app/_types/PostTypes';
import mergeFileArray from '@app/_utils/board/mergeFileLists';
import { ChangeEvent, DragEventHandler, useId, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FileViewer from './FileViewer';

function FileInputSection() {
  const ACTIVE_CLASS = 'border-slate-400 bg-secondary';
  const DEFAULT_CLASS = 'border-primary-foreground bg-background';

  const fileInputId = useId();
  const [isActive, setIsActive] = useState(false);
  const { setValue, getValues } = useFormContext<PostReqData>();

  const onDragOver: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
  };

  const onDragEnter: DragEventHandler<HTMLLabelElement> = () => {
    setIsActive(true);
  };

  const onDragLeave: DragEventHandler<HTMLLabelElement> = ({
    currentTarget,
    relatedTarget,
  }) => {
    if (
      relatedTarget instanceof HTMLElement &&
      currentTarget.contains(relatedTarget)
    )
      return;
    setIsActive(false);
  };

  const onDrop: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    const newFileArray = Array.from(files);
    const { files: prevFileArray } = getValues();

    if (!prevFileArray) {
      setValue('files', newFileArray);
      return;
    }

    const mergedFileArray = mergeFileArray(prevFileArray, newFileArray);
    setValue('files', mergedFileArray);
    setIsActive(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files: prevFileArray } = getValues();
    const { files: newFileList } = e.target;
    if (!newFileList) return;
    const newFileArray = Array.from(newFileList);

    if (!prevFileArray) {
      setValue('files', newFileArray);
      return;
    }

    const mergedFileArray = mergeFileArray(prevFileArray, newFileArray);
    setValue('files', mergedFileArray);
  };

  return (
    <label
      aria-label="file input"
      htmlFor={fileInputId}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={`flex-center min-h-44 rounded-lg border-4 border-dashed 
      ${isActive ? ACTIVE_CLASS : DEFAULT_CLASS}`}
    >
      <input
        id={fileInputId}
        onChange={onChange}
        className="hidden"
        type="file"
        multiple
      />
      <FileViewer />
    </label>
  );
}

export default FileInputSection;
