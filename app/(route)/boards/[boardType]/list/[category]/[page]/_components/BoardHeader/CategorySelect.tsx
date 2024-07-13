'use client';

import { NEW_PATH } from '@app/_constants/urls';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@app/_shadcn/components/ui/select';
import { BoardListParams } from '@app/_types/boardTypes';
import { useParams, useRouter } from 'next/navigation';

interface Props {
  categories: string[];
}

function CategorySelect({ categories }: Props) {
  const { push } = useRouter();
  const { boardType, page } = useParams<BoardListParams>();

  const handleSelectionChange = (value: string) => {
    if (value)
      push(
        NEW_PATH.boardList.url({
          boardType,
          page: Number(page),
          category: value,
        }),
      );
  };

  return (
    <Select onValueChange={handleSelectionChange}>
      <SelectTrigger className="w-28">
        <SelectValue placeholder="카테고리" />
      </SelectTrigger>
      <SelectContent>
        {['all', ...categories].map((category) => (
          <SelectItem key={category} value={category}>
            {category === 'all' ? '전체' : category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default CategorySelect;
