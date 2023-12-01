import { DefaultSelect } from 'app/_components/common';
import { PostReqData } from 'app/_types/PostTypes';
import { useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

function BoardTypeSelectSection() {
  const { register } = useFormContext<PostReqData>();

  const boardTypeRegister = register('boardId', { required: true });

  return (
    <Wrapper>
      <DefaultSelect {...boardTypeRegister}>
        <option value="notice_board">공지사항</option>
        <option value="full_member_board">정회원 게시판</option>
        <option value="associate_member_board">준회원 게시판</option>
        <option value="graduate_member_board">졸업생 게시판</option>
      </DefaultSelect>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default BoardTypeSelectSection;
