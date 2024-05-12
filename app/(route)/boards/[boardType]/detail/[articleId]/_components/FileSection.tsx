'use client';

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
        <DropdownMenuContent>
          <DropdownMenuGroup>
            {files.map(({ name, src }) => (
              <a href={src}>{name}</a>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}

export default FileSection;
