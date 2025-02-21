import { Button } from '@app/_shadcn/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@app/_shadcn/components/ui/dropdown-menu';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { DownloadIcon } from 'lucide-react';

type Props = {
  files: { name: string; src: string }[];
  size?: 'sm' | 'default';
};

export default function FileAttachment({ files, size = 'default' }: Props) {
  const { toast } = useToast();

  const handleDownloadError = async (downloadFn: () => Promise<void>) => {
    try {
      await downloadFn();
    } catch (error) {
      toast({
        title: '파일 다운로드 오류',
        description: '알 수 없는 에러가 발생했어요.\n개발자에게 문의 해주세요.',
      });
    }
  };

  const downloadFile = async (file: { name: string; src: string }) => {
    const response = await fetch(file.src);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const downloadAllFiles = async () => {
    await Promise.all(files.map((file) => downloadFile(file)));
  };

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={size} variant="outline">
            첨부 파일({files.length})
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {files.map((file) => (
            <DropdownMenuItem
              onSelect={() => handleDownloadError(() => downloadFile(file))}
              key={file.name}
            >
              {file.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        size={size}
        variant="outline"
        onClick={() => handleDownloadError(downloadAllFiles)}
      >
        <DownloadIcon className="size-4" />
      </Button>
    </div>
  );
}
