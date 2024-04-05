import { memo } from 'react';
// import { API_URL } from '@app/_constants/apiUrl';
import SearchInput from './SearchInput';
import CategorySelect from './CategorySelect';

async function BoardHeader() {
  // const res = await fetch(`${API_URL}/api/board/`);
  // const data = await res.json();

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <CategorySelect categories={['test1', 'test2']} />
      <SearchInput />
    </div>
  );
}

export default memo(BoardHeader);
