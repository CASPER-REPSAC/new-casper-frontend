import { PostReqData } from 'app/_types/PostTypes';
import { useId } from 'react';
import { useFormContext } from 'react-hook-form';

function BoardTypeSelectSection() {
  const LABEL = '게시판 종류';
  const { register } = useFormContext<PostReqData>();
  const uniqueId = useId();
  const boardTypeRegister = register('boardId', { required: true });
  return (
    <>
      <div>
        <label className="label" htmlFor={uniqueId}>
          {LABEL}
        </label>
        <select
          id={uniqueId}
          className="input w-auto px-3"
          {...boardTypeRegister}
        >
          <option value="notice_board">공지사항</option>
          <option value="full_member_board">정회원 게시판</option>
          <option value="associate_member_board">준회원 게시판</option>
          <option value="graduate_member_board">졸업생 게시판</option>
        </select>
      </div>
    </>
  );
}

export default BoardTypeSelectSection;
