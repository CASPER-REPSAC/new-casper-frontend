import { CloseIcon } from '@app/_components/icons';
import { Button } from '@nextui-org/react';

interface Props {
  files: File[] | null;
}

function FileViewer({ files }: Props) {
  if (!files)
    return (
      <span>
        첨부할 파일을 여기에 끌어다 놓거나, 클릭하여 직접 선택해주세요.
      </span>
    );

  return (
    <div className="flex w-full flex-col gap-2 p-10">
      {files.map((file) => (
        <div className="flex justify-between" key={file.name}>
          <span>{file.name}</span>
          <Button size="sm" color="danger" variant="flat">
            <CloseIcon />
          </Button>
        </div>
      ))}
    </div>
  );
}

export default FileViewer;
