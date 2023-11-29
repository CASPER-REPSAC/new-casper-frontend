import { DefaultInput, DefaultSelect } from '@src/components/common/defaultTag';
import { SearchIcon } from '@src/components/common/icons';
import { ICON_SIZE } from '@src/constants/size';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

function BoardHeader() {
  const { register } = useForm();

  return (
    <TableHeader>
      <Select>
        {/* Todo. board_type에 따라서 옵션 변경 */}
        <option value="1">전체</option>
        <option value="2">ex1</option>
        <option value="3">ex2</option>
      </Select>
      <SerachBar>
        <SearchInput
          {...register('search')}
          placeholder="검색어를 입력해 주세요."
        />
        <StyledSearchIcon size={ICON_SIZE.small} />
      </SerachBar>
    </TableHeader>
  );
}

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.2em;
  height: 35px;
  width: 100%;
`;

const SearchInput = styled(DefaultInput)`
  width: 100%;
  height: 100%;
  padding-left: 45px;
`;
const SerachBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
`;
const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 15px;
`;
const Select = styled(DefaultSelect)`
  height: 100%;
  margin-right: 1em;
  border: 1px solid ${({ theme }) => theme.borderDefault};
`;

export default BoardHeader;
