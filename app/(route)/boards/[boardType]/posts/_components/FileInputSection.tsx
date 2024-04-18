'use client';

import { PostReqData } from '@app/_types/PostTypes';
import mergeFileArray from '@app/_utils/board/mergeFileLists';
import { ChangeEvent, DragEventHandler, useId, useState } from 'react';
import { useFormContext } from 'react-hook-form';

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
    <>
      <label
        onDragOverCapture={() => {
          setIsActive(true);
        }}
        onDragLeaveCapture={() => {
          setIsActive(false);
        }}
        onDragOver={preventDefault}
        onDrop={onDrop}
        htmlFor={fileInputId}
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
        {files ? (
          <div className="flex w-full flex-col gap-2 p-10">
            {files.map((file) => (
              <div key={file.name}>{file.name}</div>
            ))}
          </div>
        ) : (
          <span>
            첨부할 파일을 여기에 끌어다 놓거나, 클릭하여 직접 선택해주세요.
          </span>
        )}
      </label>
    </>
  );
}

export default FileInputSection;
