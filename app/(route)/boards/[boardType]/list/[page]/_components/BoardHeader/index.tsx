import { memo } from 'react';
import { API_URL } from '@app/_constants/apiUrl';
import SearchInput from './SearchInput';
import CategorySelect from './CategorySelect';

async function BoardHeader() {
  const res = await fetch(`${API_URL}/api/board`);

  console.log(res.status);

  return (
    <div className="flex w-full justify-between gap-4">
      <CategorySelect />
      <SearchInput />
    </div>
  );
}

export default memo(BoardHeader);
