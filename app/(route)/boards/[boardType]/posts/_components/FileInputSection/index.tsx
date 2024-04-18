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
  const { setValue, getValues, watch } = useFormContext<PostReqData>();
  const preventDefault: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
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

  const files = watch('file');

  return (
    <label
      aria-label="file input"
      htmlFor={fileInputId}
      onDragOverCapture={() => {
        setIsActive(true);
      }}
      onDragLeaveCapture={() => {
        setIsActive(false);
      }}
      onDragOver={preventDefault}
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
      <FileViewer files={files || null} />
    </label>
  );
}

export default FileInputSection;
