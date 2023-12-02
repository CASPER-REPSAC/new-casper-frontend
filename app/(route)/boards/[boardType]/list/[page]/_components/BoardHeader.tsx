import { LabelInput } from 'app/_components/common';
import { SearchIcon } from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';
import { useForm } from 'react-hook-form';

function BoardHeader() {
  const { register } = useForm();

  return (
    <div className="mb-4 flex w-full justify-between gap-4">
      <select className="input w-auto px-4">
        {/* Todo. board_type에 따라서 옵션 변경 */}
        <option value="1">전체</option>
        <option value="2">ex1</option>
        <option value="3">ex2</option>
      </select>
      <LabelInput
        labelIcon={<SearchIcon size={ICON_SIZE.small} />}
        {...register('search')}
        placeholder="검색어를 입력해 주세요."
      />
    </div>
  );
}

export default BoardHeader;
