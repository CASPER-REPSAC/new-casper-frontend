import { memo } from 'react';
import { API_URL } from '@app/_constants/apiUrl';
import { BoardListParams, Category } from '@app/_types/boardTypes';
import SearchInput from './SearchInput';
import CategorySelect from './CategorySelect';

interface Props {
  params: BoardListParams;
}

async function BoardHeader({ params: { boardType } }: Props) {
  const res = await fetch(`${API_URL}/api/board/category?board=${boardType}`);
  const data: Category = await res.json();

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <CategorySelect categories={data.categories} />
      <SearchInput />
    </div>
  );
}

export default memo(BoardHeader);
