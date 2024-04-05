import { BOARD_TYPE } from '@app/_constants/mock';
import useCategory from '@app/_hooks/apis/boards/useCategory';
import { roleState } from '@app/_store/permissionAtoms';
import { PostReqData } from '@app/_types/PostTypes';
import { Select, SelectItem } from '@nextui-org/react';
import { ChangeEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

function BoardTypeSelectSection({ defaultValue }: { defaultValue: string }) {
  const disableKeys = {
    관리자: [],
    정회원: [BOARD_TYPE.notice],
    준회원: [BOARD_TYPE.notice, BOARD_TYPE.graduate, BOARD_TYPE.full],
    손님: [
      BOARD_TYPE.notice,
      BOARD_TYPE.graduate,
      BOARD_TYPE.full,
      BOARD_TYPE.associate,
    ],
  };

  const { setValue, watch } = useFormContext<PostReqData>();
  const role = useRecoilValue(roleState);
  const { data } = useCategory(watch('boardId'));

  const handleBoardIdChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue('boardId', e.target.value);
    setValue('category', 'all');
  };

  const handleCategoryCahnge: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue('category', e.target.value);
  };

  return (
    <div className="flex gap-4">
      <Select
        label="게시판"
        isRequired
        aria-label="category select"
        defaultSelectedKeys={[defaultValue]}
        size="lg"
        className="w-40"
        disabledKeys={disableKeys[role]}
        onChange={handleBoardIdChange}
      >
        <SelectItem key={BOARD_TYPE.notice} value={BOARD_TYPE.notice}>
          공지사항
        </SelectItem>
        <SelectItem key={BOARD_TYPE.full} value={BOARD_TYPE.full}>
          정회원 게시판
        </SelectItem>
        <SelectItem key={BOARD_TYPE.graduate} value={BOARD_TYPE.graduate}>
          졸업생 게시판
        </SelectItem>
        <SelectItem key={BOARD_TYPE.associate} value={BOARD_TYPE.associate}>
          준회원 게시판
        </SelectItem>
        <SelectItem key={BOARD_TYPE.freedom} value={BOARD_TYPE.freedom}>
          자유 게시판
        </SelectItem>
      </Select>
      {data && data?.categories.length > 0 && (
        <Select
          onChange={handleCategoryCahnge}
          label="카테고리"
          size="lg"
          className="w-40"
        >
          {data.categories.map((category) => (
            <SelectItem key={category}>{category}</SelectItem>
          ))}
        </Select>
      )}
    </div>
  );
}

export default BoardTypeSelectSection;
