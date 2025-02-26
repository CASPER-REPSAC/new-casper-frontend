'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@app/_shadcn/components/ui/input';

function SearchInput() {
  const { register } = useForm();

  return (
    <Input
      autoComplete="off"
      {...register('search')}
      placeholder="검색 기능 개발 중이에요."
    />
  );
}

export default SearchInput;
