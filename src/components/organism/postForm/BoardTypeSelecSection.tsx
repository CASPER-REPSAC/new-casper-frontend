import RadioInput from '@src/components/molecules/inputs/RadioInput';
import { BOARD_TYPE } from '@src/constants/mock';
import { PostReqData } from '@src/types/PostTypes';
import { useFormContext } from 'react-hook-form';
import { styled } from 'styled-components';

function BoardTypeSelectSection() {
  const { register, watch } = useFormContext<PostReqData>();

  const boardTypeRegister = register('boardId', { required: true });

  return (
    <Wrapper>
      <RadioInput
        label="공지사항"
        register={boardTypeRegister}
        value={BOARD_TYPE.notice}
        checked={watch('boardId') === BOARD_TYPE.notice}
      />
      <RadioInput
        label="정회원 게시판"
        register={boardTypeRegister}
        value={BOARD_TYPE.full}
        checked={watch('boardId') === BOARD_TYPE.full}
      />
      <RadioInput
        label="준회원 게시판"
        register={boardTypeRegister}
        value={BOARD_TYPE.associate}
        checked={watch('boardId') === BOARD_TYPE.associate}
      />
      <RadioInput
        label="졸업생 게시판"
        register={boardTypeRegister}
        value={BOARD_TYPE.graduate}
        checked={watch('boardId') === BOARD_TYPE.graduate}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default BoardTypeSelectSection;
