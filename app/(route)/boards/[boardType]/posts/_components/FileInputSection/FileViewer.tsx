import { CloseIcon, FileAddIcon } from '@app/_components/icons';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@app/_shadcn/components/ui/table';
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
    <Table className="mx-auto my-4 w-10/12">
      <TableHeader>
        <TableRow>
          <TableHead>파일 명</TableHead>
          <TableHead>파일 크기</TableHead>
          <TableHead>마지막 수정 일시</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from(files).map((file, idx) => (
          <TableRow className="group" key={file.name}>
            <TableCell className="truncate">{file.name}</TableCell>
            <TableCell className="truncate">
              {(file.size / 1_000_000).toFixed(3)} MB
            </TableCell>
            <TableCell className="truncate">
              {new Date(file.lastModified).toLocaleDateString()}
            </TableCell>

            <TableCell>
              <Button
                variant="destructive"
                className="invisible group-hover:visible"
                size="sm"
                onClick={(e) => removeFile(e, idx)}
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

export default FileViewer;
