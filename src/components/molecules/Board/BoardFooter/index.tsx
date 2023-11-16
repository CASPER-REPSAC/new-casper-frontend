import { LeftArrowIcon, RightArrowIcon } from '@src/components/common/Icons';
import PageCircleButton from '@src/components/common/PageCircleButton';
import usePagination from '@src/hooks/usePagination';
import useWindowSize from '@src/hooks/useWindowSize';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

interface Props {
  maxPage: number;
  curPage: number;
}

function BoardFooter({ maxPage: articleNum, curPage }: Props) {
  const { width } = useWindowSize();

  const pageInteval = width < 768 ? 5 : 10;
  const maxPage = Math.ceil(articleNum / pageInteval);
  const { page: footerPage, setNextPage, setPrevPage } = usePagination(maxPage);
  const { push, asPath } = useRouter();

  const maxPageList = Array.from({ length: articleNum }, (_, idx) => idx + 1);
  const start = footerPage * pageInteval;
  const pageList = maxPageList.slice(start, start + pageInteval);

  return (
    <TableFooter>
      <PrevButton size={35} onClick={setPrevPage} />
      <PageButtonSection>
        {pageList.map((page) => {
          return (
            <PageCircleButton
              key={page}
              $highlight={page === curPage}
              onClick={() =>
                push(`${asPath}/../${page}`, undefined, {
                  scroll: false,
                })
              }
            >
              {page}
            </PageCircleButton>
          );
        })}
      </PageButtonSection>
      <NextButton size={35} onClick={setNextPage} />
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
