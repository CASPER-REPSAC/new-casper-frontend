'use client';

import { Input } from '@app/_shadcn/components/ui/input';
import { useForm } from 'react-hook-form';

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
