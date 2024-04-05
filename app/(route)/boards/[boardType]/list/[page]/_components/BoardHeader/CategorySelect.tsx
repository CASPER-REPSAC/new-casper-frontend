'use client';

import { categoryStateFamily } from '@app/_store/boardAtoms';
import { Select, SelectItem } from '@nextui-org/react';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  categories: string[];
}

function CategorySelect({ categories }: Props) {
  const [, setCategory] = useRecoilState(categoryStateFamily(''));

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <Select
      radius="sm"
      className="w-28"
      label="소분류"
      onChange={handleSelectionChange}
    >
      {categories.map((category) => (
        <SelectItem key={category} value={category}>
          {category}
        </SelectItem>
      ))}
    </Select>
  );
}

export default CategorySelect;
