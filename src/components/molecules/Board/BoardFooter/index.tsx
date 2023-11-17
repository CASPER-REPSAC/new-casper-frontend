import { LeftArrowIcon, RightArrowIcon } from '@src/components/common/Icons';
import PageCircleButton from '@src/components/common/PageCircleButton';
import SCREEN_SIZE from '@src/constants/screenWidth';
import { ICON_SIZE } from '@src/constants/size';
import usePagination from '@src/hooks/usePagination';
import useWindowSize from '@src/hooks/useWindowSize';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

interface Props {
  maxPage: number;
  curPage: number;
}

function BoardFooter({ maxPage, curPage }: Props) {
  const { query } = useRouter();
  const { width } = useWindowSize();
  const { page: footerPage, setNextPage, setPrevPage } = usePagination(maxPage);

  const fullPageList = Array.from({ length: maxPage }, (_, idx) => idx + 1);
  const pageInteval = width < SCREEN_SIZE.mobile ? 5 : 10;
  const start = footerPage * pageInteval;
  const pageList = fullPageList.slice(start, start + pageInteval);

  return (
    <TableFooter>
      <PrevButton size={ICON_SIZE.medium} onClick={setPrevPage} />
      <PageButtonSection>
        {pageList.map((page) => {
          const href = `/boards/${query.boardType}/list/${page}`;
          return (
            <Link href={href} scroll={false}>
              <PageCircleButton key={page} $highlight={page === curPage}>
                {page}
              </PageCircleButton>
            </Link>
          );
        })}
      </PageButtonSection>
      <NextButton size={ICON_SIZE.medium} onClick={setNextPage} />
    </TableFooter>
  );
}

const TableFooter = styled.div`
  margin-top: 1rem;
  position: relative;
  display: flex;
  width: 100%;
  max-width: 700px;
  justify-content: space-between;
`;

const PageButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
`;

const PrevButton = styled(LeftArrowIcon)`
  cursor: pointer;
`;
const NextButton = styled(RightArrowIcon)`
  cursor: pointer;
`;

export default BoardFooter;
