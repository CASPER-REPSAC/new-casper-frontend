import PageCircleButton from '@src/components/common/PageCircleButton';
import useRedirect from '@src/hooks/useRedirect';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { styled } from 'styled-components';

interface Props {
  maxPage: number;
  curPage: number;
}

function BoardFooter({ maxPage, curPage }: Props) {
  const maxPageList = Array.from({ length: maxPage }, (_, idx) => idx + 1);
  const rediert = useRedirect();

  return (
    <TableFooter>
      <PageButtonSection>
        <MdKeyboardArrowLeft size={35} />
        {maxPageList.map((page) => (
          <PageCircleButton
            key={page}
            $highlight={page === curPage}
            onClick={rediert(`${page}`)}
          >
            {page}
          </PageCircleButton>
        ))}
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

const PageButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

export default BoardFooter;
