'use client';

import { useFormContext } from 'react-hook-form';
import { PostReqData } from '@app/_types/PostTypes';
import {
  ChangeEvent,
  DragEventHandler,
  useEffect,
  useId,
  useState,
} from 'react';
import mergeFileArray from '@app/_utils/board/mergeFileLists';
import useFileUploadMutation from '@app/_hooks/apis/shared/useFileUploadMutation';
import FileViewer from './FileViewer';

function FileInputSection() {
  const ACTIVE_CLASS = 'border-slate-400 bg-secondary';
  const DEFAULT_CLASS = 'border-primary-foreground bg-background';

  const fileInputId = useId();
  const [isActive, setIsActive] = useState(false);
  const { setValue, getValues, register } = useFormContext<PostReqData>();
  const {
    mutate: fileUploadMutate,
    isSuccess,
    data: uploadedFiles,
  } = useFileUploadMutation();

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
    const dataTransfer = new DataTransfer();
    const { files } = e.dataTransfer;
    const { files: prevFileList } = getValues();

    if (!prevFileList) {
      setValue('files', files);
      return;
    }

    const prevFileArray = Array.from(prevFileList);
    const newFileArray = Array.from(files);
    const mergedFileArray = mergeFileArray(prevFileArray, newFileArray);
    mergedFileArray.forEach((file) => dataTransfer.items.add(file));
    setValue('files', dataTransfer.files);
    setIsActive(false);
  };

  const uploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (!files) return;
    fileUploadMutate({ type: 'article', files });
  };

  const fileRegister = register('files', { onChange: uploadFiles });

  useEffect(() => {
    if (isSuccess && uploadedFiles) setValue('fileUrls', uploadedFiles.urls);
  }, [uploadedFiles, isSuccess, setValue]);

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
        className="hidden"
        type="file"
        multiple
        {...fileRegister}
      />
      <FileViewer />
    </label>
  );
}

export default FileInputSection;
