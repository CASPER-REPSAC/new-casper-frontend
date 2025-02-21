import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@app/_shadcn/components/ui/table';

import { DragEventHandler, useId, useState, MouseEvent } from 'react';
import { Button } from '@app/_shadcn/components/ui/button';
import { cn } from '@app/_shadcn/lib/utils';
import useFileUploadMutation, {
  UploadType,
} from '@app/_hooks/apis/shared/useFileUploadMutation';
import { CloseIcon, FileAddIcon } from '../icons';
import Spinner from '../Spinner';

interface Props {
  type: UploadType;
  onFileViewerChange: (files: { name: string; url: string }[]) => void;
  files: { name: string; url: string }[];
  size?: 'sm' | 'md';
}

function DndFileInput({ type, onFileViewerChange, files, size = 'md' }: Props) {
  const ACTIVE_CLASS = 'border-slate-400 bg-secondary';
  const DEFAULT_CLASS = 'border-primary-foreground bg-background';
  const { mutate: fileUploadMutate, isPending } = useFileUploadMutation();

  const fileInputId = useId();
  const [isActive, setIsActive] = useState(false);

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

  const uploadFiles = (newFiles: FileList) => {
    if (files.some((file) => file.name === newFiles[0].name)) return;
    fileUploadMutate(
      { type, files: newFiles },
      {
        onSuccess: (uploadedFiles) =>
          onFileViewerChange([...files, ...uploadedFiles]),
      },
    );
  };

  const onDrop: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
    const { files: droppedFiles } = e.dataTransfer;
    setIsActive(false);

    if (!droppedFiles) return;
    uploadFiles(droppedFiles);
  };

  return (
    <label
      aria-label="file input"
      htmlFor={fileInputId}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={`flex-center min-h-44 flex-1 flex-col gap-4 rounded-lg border-4 border-dashed 
  ${isActive ? ACTIVE_CLASS : DEFAULT_CLASS}`}
    >
      <input
        id={fileInputId}
        className="sr-only"
        type="file"
        multiple
        onChange={(e) => {
          if (!e.target.files) return;
          uploadFiles(e.target.files);
        }}
      />
      <FileViewer
        files={files}
        onRemoveFiles={onFileViewerChange}
        size={size}
      />
      {isPending && <Spinner />}
    </label>
  );
}

function FileViewer({
  files,
  onRemoveFiles,
  size = 'md',
}: {
  files: { name: string; url: string }[];
  onRemoveFiles: (removedFiles: { name: string; url: string }[]) => void;
  size?: 'sm' | 'md';
}) {
  if (!files || files.length === 0)
    return (
      <div className="flex flex-col items-center gap-4">
        <FileAddIcon className="size-20" />
        <span>
          첨부할 파일을 여기에 끌어다 놓거나, 클릭하여 직접 선택해주세요.
        </span>
      </div>
    );

  const removeFile = (e: MouseEvent<HTMLButtonElement>, targetName: string) => {
    const filteredFiles = Array.from(files).filter(
      ({ name }) => name !== targetName,
    );
    onRemoveFiles(filteredFiles);
    e.preventDefault();
  };

  return (
    <Table className="mx-auto my-4 w-10/12">
      <TableHeader>
        <TableRow>
          <TableHead>파일 명</TableHead>
          <TableHead>삭제</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from(files).map((file) => (
          <TableRow
            className={cn('group', size === 'sm' && 'h-4')}
            key={file.name}
          >
            <TableCell className="truncate">{file.name}</TableCell>
            <TableCell>
              <Button
                type="button"
                variant="destructive"
                className="invisible group-hover:visible"
                size="sm"
                onClick={(e) => removeFile(e, file.name)}
              >
                <CloseIcon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DndFileInput;
