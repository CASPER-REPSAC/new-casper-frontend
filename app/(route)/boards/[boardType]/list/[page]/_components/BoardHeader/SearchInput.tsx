'use client';

import { SearchIcon } from '@app/_components/icons';
import { ICON_SIZE } from '@app/_constants/size';
import { Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

function SearchInput() {
  const { register } = useForm();

  return (
    <>
      <Input
        autoComplete="off"
        radius="sm"
        startContent={<SearchIcon size={ICON_SIZE.small} />}
        {...register('search')}
        label="검색"
        placeholder="검색 기능 개발 중이에요."
      />
    </>
  );
}

export default SearchInput;
