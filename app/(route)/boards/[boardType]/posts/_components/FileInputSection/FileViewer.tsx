import { CloseIcon, FileAddIcon } from '@app/_components/icons';
import { Button } from '@app/_shadcn/components/ui/button';
import { CreateArticleForm } from '@app/_types/PostTypes';
import { MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';

function FileViewer() {
  const { watch, setValue } = useFormContext<CreateArticleForm>();
  const files = watch('files');

  if (!files || files.length === 0)
    return (
      <div className="flex flex-col items-center gap-4">
        <FileAddIcon className="size-20" />
        <span>
          첨부할 파일을 여기에 끌어다 놓거나, 클릭하여 직접 선택해주세요.
        </span>
      </div>
    );

  const removeFile = (e: MouseEvent<HTMLButtonElement>, idx: number) => {
    const dataTranster = new DataTransfer();
    Array.from(files)
      .filter((file, index) => index !== idx)
      .forEach((file) => dataTranster.items.add(file));
    setValue('files', dataTranster.files);
    e.preventDefault();
  };

  return (
    <div className="flex w-full flex-col gap-1 p-10">
      {Array.from(files).map((file, idx) => (
        <div
          className="group flex items-center justify-between rounded-lg px-4 py-1 hover:bg-secondary"
          key={file.name}
        >
          <span className="truncate">{file.name}</span>

          <Button
            variant="destructive"
            className="invisible group-hover:visible"
            size="sm"
            onClick={(e) => removeFile(e, idx)}
          >
            <CloseIcon />
          </Button>
        </div>
      ))}
    </div>
  );
}

export default FileViewer;
