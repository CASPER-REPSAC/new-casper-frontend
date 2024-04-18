'use client';

import { PostReqData } from '@app/_types/PostTypes';
import mergeFileArray from '@app/_utils/board/mergeFileLists';
import { ChangeEvent, DragEventHandler, useId, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FileViewer from './FileViewer';

function FileInputSection() {
  const ACTIVE_CLASS = 'border-primary-200 bg-default-200';
  const DEFAULT_CLASS = 'border-default-200 bg-default-100';

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
    const { file: prevFileArray } = getValues();

    if (!prevFileArray) {
      setValue('file', newFileArray);
      return;
    }

    const mergedFileArray = mergeFileArray(prevFileArray, newFileArray);
    setValue('file', mergedFileArray);
    setIsActive(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { file: prevFileArray } = getValues();
    const { files: newFileList } = e.target;
    if (!newFileList) return;
    const newFileArray = Array.from(newFileList);

    if (!prevFileArray) {
      setValue('file', newFileArray);
      return;
    }

    const mergedFileArray = mergeFileArray(prevFileArray, newFileArray);
    setValue('file', mergedFileArray);
  };

  return (
    <label
      aria-label="file input"
      htmlFor={fileInputId}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={`flex-center min-h-44 rounded-lg border-3 border-dashed 
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
