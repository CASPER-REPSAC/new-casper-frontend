import { BOARD_TYPE } from '@app/_constants/mock';
import { roleState } from '@app/_store/permissionAtoms';
import { PostReqData } from '@app/_types/PostTypes';
import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

function BoardTypeSelectSection({ defaultValue }: { defaultValue: string }) {
  const { register } = useFormContext<PostReqData>();
  const uniqueId = useId();
  const boardTypeRegister = register('boardId', { required: true });
  const role = useRecoilValue(roleState);

  return (
    <div>
      <label className="label" htmlFor={uniqueId}>
        게시판 종류
      </label>
      <select
        {...boardTypeRegister}
        id={uniqueId}
        className="input w-auto px-3"
        defaultValue={defaultValue}
      >
        {role === '관리자' && (
          <option value={BOARD_TYPE.notice}>공지사항</option>
        )}
        {(role === '관리자' || role === '정회원') && (
          <option value={BOARD_TYPE.full}>정회원 게시판</option>
        )}
        {(role === '관리자' || role === '정회원') && (
          <option value={BOARD_TYPE.graduate}>졸업생 게시판</option>
        )}
        {(role === '관리자' || role === '정회원' || role === '준회원') && (
          <option value={BOARD_TYPE.associate}>준회원 게시판</option>
        )}
        <option value={BOARD_TYPE.freedom}>자유 게시판</option>
      </select>
    </div>
  );
}

export default BoardTypeSelectSection;
