'use client';

import { LabelInput } from '@app/_components/common';
import { SearchIcon } from '@app/_components/icons';
import { ICON_SIZE } from '@app/_constants/size';
import { useForm } from 'react-hook-form';

function SearchInput() {
  const { register } = useForm();

  return (
    <>
      <LabelInput
        autoComplete="off"
        labelIcon={<SearchIcon size={ICON_SIZE.small} />}
        {...register('search')}
        placeholder="검색 기능 개발 중이에요."
      />
    </>
  );
}

export default SearchInput;
