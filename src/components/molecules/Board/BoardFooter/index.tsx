import useRedirect from '@src/hooks/useRedirect';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { css, styled } from 'styled-components';

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
          <PageButton
            key={page}
            $highlight={page === curPage}
            onClick={rediert(`${page}`)}
          >
            {page}
          </PageButton>
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
const PageButton = styled.button<{ $highlight: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  color: ${({ theme }) => theme.textWeek};
  font-size: 1.6rem;
  cursor: pointer;

  ${({ $highlight, theme }) => {
    if ($highlight) {
      return css`
        background-color: ${theme.surfacePointDefault};
        border: 1px solid ${theme.borderBold};
      `;
    }
    return css`
      border: 1px solid ${theme.borderDefault};
    `;
  }}
`;
const PageButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

export default BoardFooter;
