'use client';

import { API_URL } from '@app/_constants/apiUrl';
import boardService from '@app/_service/boardService';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@app/_shadcn/components/ui/dropdown-menu';
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu';
import { FolderIcon } from 'lucide-react';

interface Props {
  files: { name: string; src: string }[];
}

function FileSection({ files }: Props) {
  return (
    <section className="flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <FolderIcon className="mr-2" />
            <span>첨부파일 모아보기</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-4 py-2">
          <DropdownMenuGroup>
            {files.map(({ name, src }) => {
              const relativePath = src.split(API_URL)[1];
              return (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    boardService.downloadFile({ url: relativePath, name })
                  }
                >
                  {name}
                </Button>
              );
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}

export default FileSection;
