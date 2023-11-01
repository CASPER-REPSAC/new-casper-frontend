import PageCircleButton from '@src/components/common/PageCircleButton';
import usePagination from '@src/hooks/usePagination';
import { useRouter } from 'next/router';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { styled } from 'styled-components';

interface Props {
  maxPage: number;
  curPage: number;
}

function BoardFooter({ maxPage: articleNum, curPage }: Props) {
  const maxPage = Math.ceil(articleNum / 10);
  const { page: footerPage, setNextPage, setPrevPage } = usePagination(maxPage);
  const { push, asPath } = useRouter();

  const maxPageList = Array.from({ length: articleNum }, (_, idx) => idx + 1);
  const start = footerPage * 10;
  const curPageList = maxPageList.splice(start, start + 10);

  return (
    <TableFooter>
      <PrevButton size={35} onClick={setPrevPage} />
      <PageButtonSection>
        {curPageList.map((page) => {
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
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
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

const PrevButton = styled(MdKeyboardArrowLeft)`
  cursor: pointer;
`;
const NextButton = styled(MdKeyboardArrowRight)`
  cursor: pointer;
`;

export default BoardFooter;
