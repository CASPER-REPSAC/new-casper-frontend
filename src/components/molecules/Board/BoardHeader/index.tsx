import DefaultInput from '@src/components/common/DefaultInput';
import { useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
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
          register={register('search')}
          placeholder="검색어를 입력해 주세요."
        />
        <SearchIcon size={20} />
      </SerachBar>
    </TableHeader>
  );
}

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.2em;
  height: 35px;
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
const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  left: 15px;
`;
const Select = styled.select`
  background-color: inherit;
  height: 100%;
  color: ${({ theme }) => theme.textDefault};
  font-size: 1.8rem;
  margin-right: 1em;
  width: 120px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.borderDefault};
`;

export default BoardHeader;
