import { BOARD_TYPE } from '@app/_constants/mock';
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

  const { setValue } = useFormContext<PostReqData>();
  const role = useRecoilValue(roleState);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue('boardId', e.target.value);
  };

  return (
    <div>
      <Select
        label="게시판"
        aria-label="category select"
        defaultSelectedKeys={[defaultValue]}
        size="lg"
        className="w-40"
        disabledKeys={disableKeys[role]}
        onChange={handleChange}
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
    </div>
  );
}

export default BoardTypeSelectSection;
