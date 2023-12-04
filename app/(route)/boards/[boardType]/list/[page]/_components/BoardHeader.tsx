'use client';

import { LabelInput } from 'app/_components/common';
import { SearchIcon } from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';
import { memo } from 'react';
import { useForm } from 'react-hook-form';

function BoardHeader() {
  console.log('HEader');
  const { register } = useForm();

  return (
    <div className="flex w-full justify-between gap-4">
      <select className="input w-auto px-4">
        {/* Todo. board_type에 따라서 옵션 변경 */}
        <option value="1">전체</option>
        <option value="2">ex1</option>
        <option value="3">ex2</option>
      </select>
      <LabelInput
        labelIcon={<SearchIcon size={ICON_SIZE.small} />}
        {...register('search')}
        placeholder="검색 기능 개발 중이에요."
        disabled
      />
    </div>
  );
}

export default memo(BoardHeader);
