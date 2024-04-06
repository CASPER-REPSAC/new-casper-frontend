'use client';

import { Select, SelectItem } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';

interface Props {
  categories: string[];
}

function CategorySelect({ categories }: Props) {
  const { push } = useRouter();

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) push(`?category=${e.target.value}`);
  };

  return (
    <Select
      radius="sm"
      className="w-28"
      label="카테고리"
      onChange={handleSelectionChange}
    >
      {['all', ...categories].map((category) => (
        <SelectItem key={category} value={category}>
          {category === 'all' ? '전체' : category}
        </SelectItem>
      ))}
    </Select>
  );
}

export default CategorySelect;
