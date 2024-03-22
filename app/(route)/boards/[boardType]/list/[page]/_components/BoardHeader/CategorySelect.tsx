'use client';

import { Select, SelectItem } from '@nextui-org/react';

function CategorySelect() {
  return (
    <Select radius="sm" color="default" className="w-28">
      <SelectItem key="test">test</SelectItem>
    </Select>
  );
}

export default CategorySelect;
