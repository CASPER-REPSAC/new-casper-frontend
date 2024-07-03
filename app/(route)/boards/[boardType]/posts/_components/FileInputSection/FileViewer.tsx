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
  const { watch, setValue, getValues } = useFormContext<CreateArticleForm>();
  const uploadedFiles = watch('uploadedFiles');

  if (!uploadedFiles || uploadedFiles.length === 0)
    return (
      <div className="flex flex-col items-center gap-4">
        <FileAddIcon className="size-20" />
        <span>
          첨부할 파일을 여기에 끌어다 놓거나, 클릭하여 직접 선택해주세요.
        </span>
      </div>
    );

  const removeFile = (e: MouseEvent<HTMLButtonElement>, targetName: string) => {
    const prevUploadedFiles = getValues('uploadedFiles');
    const filteredUploadedFiles = prevUploadedFiles.filter(
      ({ name }) => name !== targetName,
    );
    setValue('uploadedFiles', filteredUploadedFiles);
    e.preventDefault();
  };

  return (
    <Table className="mx-auto my-4 w-10/12">
      <TableHeader>
        <TableRow>
          <TableHead>파일 명</TableHead>
          <TableHead>파일 크기</TableHead>
          <TableHead>삭제</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from(uploadedFiles).map((file) => (
          <TableRow className="group" key={file.name}>
            <TableCell className="truncate">{file.name}</TableCell>
            <TableCell>?? MB</TableCell>
            <TableCell>
              <Button
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

export default FileViewer;
