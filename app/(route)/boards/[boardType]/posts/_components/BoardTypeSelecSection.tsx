'use client';

import { useFormContext } from 'react-hook-form';
import useCategory from '@app/_hooks/apis/boards/useCategory';
import { CreateArticleForm } from '@app/_types/PostTypes';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@app/_shadcn/components/ui/select';

function BoardTypeSelectSection() {
  const { setValue, watch } = useFormContext<CreateArticleForm>();
  const { data } = useCategory(watch('boardId'));

  const handleCategoryCahnge = (selected: string) => {
    setValue('category', selected);
  };

  return (
    <div className="flex gap-4">
      {data && data?.categories.length > 0 && (
        <Select onValueChange={handleCategoryCahnge}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="카테고리" />
          </SelectTrigger>
          <SelectContent>
            {data.categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}

export default BoardTypeSelectSection;
