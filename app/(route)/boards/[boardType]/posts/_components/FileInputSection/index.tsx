'use client';

import { useFormContext } from 'react-hook-form';
import { CreateArticleForm } from '@app/_types/PostTypes';
import {
  ChangeEvent,
  DragEventHandler,
  useEffect,
  useId,
  useState,
} from 'react';
import { mergeFileArray, mergeArraysByKey } from '@app/_utils/board/merge';
import useFileUploadMutation from '@app/_hooks/apis/shared/useFileUploadMutation';
import FileViewer from './FileViewer';

function FileInputSection() {
  const ACTIVE_CLASS = 'border-slate-400 bg-secondary';
  const DEFAULT_CLASS = 'border-primary-foreground bg-background';

  const fileInputId = useId();
  const [isActive, setIsActive] = useState(false);
  const { setValue, getValues, register } = useFormContext<CreateArticleForm>();
  const { mutate: fileUploadMutate, data: uploadedFiles } =
    useFileUploadMutation();

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

  const mergeFileList = (prevFileList: FileList, newFileList: FileList) => {
    const dataTransfer = new DataTransfer();
    const prevFileArray = Array.from(prevFileList);
    const newFileArray = Array.from(newFileList);
    const mergedFileArray = mergeFileArray(prevFileArray, newFileArray);
    mergedFileArray.forEach((file) => dataTransfer.items.add(file));
    return dataTransfer.files;
  };

  const onDrop: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    const prevFiles = getValues('files');
    if (!prevFiles) {
      setValue('files', files);
    } else {
      const mergedFileList = mergeFileList(prevFiles, files);
      setValue('files', mergedFileList);
    }
    setIsActive(false);
    fileUploadMutate({ type: 'article', files });
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (!files || files.length === 0) return;
    fileUploadMutate({ type: 'article', files });
  };

  const fileInputRegister = register('files', {
    onChange: onFileChange,
  });

  useEffect(() => {
    if (!uploadedFiles || uploadedFiles.length === 0) return;
    const prevUploadedFiles = getValues('uploadedFiles');
    if (!prevUploadedFiles) {
      setValue('uploadedFiles', uploadedFiles);
      return;
    }

    const newUploadedFiles = mergeArraysByKey(
      prevUploadedFiles,
      uploadedFiles,
      ({ name }) => name,
    );

    setValue('uploadedFiles', newUploadedFiles);
  }, [uploadedFiles, setValue, getValues]);

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
        {...fileInputRegister}
      />
      <FileViewer />
    </label>
  );
}

export default FileInputSection;
