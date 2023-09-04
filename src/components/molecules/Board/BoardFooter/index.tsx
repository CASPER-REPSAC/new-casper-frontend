import DefaultButton from '@src/components/common/DefaultButton';
import { useRouter } from 'next/router';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { styled } from 'styled-components';

function BoardFooter() {
  const router = useRouter();
  const onClickWrite = () => {
    router.push(`${router.asPath}/posts`);
  };

  return (
    <TableFooter>
      <WriteButton type="small" onClick={onClickWrite}>
        작성 하기
      </WriteButton>
      <PageButtonSection>
        <MdKeyboardArrowLeft size={35} />
        <PageButton>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <PageButton>4</PageButton>
        <PageButton>5</PageButton>
        <PageButton>6</PageButton>
        <MdKeyboardArrowRight size={35} />
      </PageButtonSection>
    </TableFooter>
  );
}

const TableFooter = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const PageButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  color: ${({ theme }) => theme.textWeek};
  font-size: 1.6rem;
  cursor: pointer;
`;
const PageButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;
const WriteButton = styled(DefaultButton)`
  align-self: flex-end;
  width: 70px;
`;

export default BoardFooter;
