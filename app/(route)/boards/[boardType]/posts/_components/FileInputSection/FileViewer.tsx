import { CloseIcon, FileAddIcon } from '@app/_components/icons';
import { PostReqData } from '@app/_types/PostTypes';
import { Button } from '@nextui-org/react';
import { MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';

function FileViewer() {
  const { watch, setValue } = useFormContext<PostReqData>();
  const files = watch('file');

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
    const copiedFiles = [...files];
    copiedFiles.splice(idx, 1);
    setValue('file', copiedFiles);
    e.preventDefault();
  };

  return (
    <div className="flex w-full flex-col gap-1 p-10">
      {files.map((file, idx) => (
        <div
          className="group flex items-center justify-between rounded-lg px-4 py-1 hover:bg-default-200"
          key={file.name}
        >
          <span>{file.name}</span>
          <Button
            className="invisible group-hover:visible"
            size="sm"
            color="danger"
            variant="flat"
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
